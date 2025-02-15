"use client"; // This is a client component

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "email") {
      if (!emailRegex.test(value)) {
        setEmailError("Invalid email format");
      } else {
        setEmailError("");
      }
    }

    if (name === "message") {
      const words = value.trim().split(/\s+/); // Split message by spaces
      if (words.length < 2) {
        setMessageError("Message must contain at least two words.");
      } else {
        setMessageError("");
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent submission if email or message is invalid
    if (
      emailError ||
      messageError ||
      formData.message.trim().split(/\s+/).length < 2
    )
      return;

    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await response.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <main className="container mx-auto p-6 mt-20">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg mb-6">
          Torama is a leading technology company specializing in estate
          management, fintech, and trading solutions. Email us:{" "}
          <a
            href="mailto:sales@torama.ng"
            className="text-blue-600 hover:underline"
          >
            sales@torama.ng
          </a>
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto"
        >
          <label className="block mb-2 text-gray-700 font-semibold">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="border rounded-lg p-3 w-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <label className="block mt-4 mb-2 text-gray-700 font-semibold">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="border rounded-lg p-3 w-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {emailError && <p className="text-red-600 mt-1">{emailError}</p>}

          <label className="block mt-4 mb-2 text-gray-700 font-semibold">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows={4}
            className="border rounded-lg p-3 w-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {messageError && <p className="text-red-600 mt-1">{messageError}</p>}

          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 text-white px-6 py-3 text-lg font-semibold rounded-lg hover:bg-blue-700 transition"
            disabled={loading || !!emailError || !!messageError}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-600 mt-4">Message sent successfully!</p>
          )}
          {error && <p className="text-red-600 mt-4">{error}</p>}
        </form>
      </main>
      <Footer />
    </>
  );
}
