import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero2 from "../components/Hero2";

export default function Privacy() {
  return (
    <>
      <Navbar />
      {/* <Hero2 /> */}
      <main className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-lg mb-4">
          At Torama, we are committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, and safeguard your information
          when you visit our website or use our services.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-4">Information We Collect</h2>
        <p className="text-lg mb-4">
          We may collect personal information such as your name, email address,
          and phone number when you voluntarily submit it to us through forms or
          other interactions on our website.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-4">
          How We Use Your Information
        </h2>
        <p className="text-lg mb-4">
          We use the information we collect to provide and improve our services,
          communicate with you, and personalize your experience. We do not sell
          or share your information with third parties without your consent.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-4">Data Security</h2>
        <p className="text-lg mb-4">
          We implement industry-standard security measures to protect your data
          from unauthorized access, alteration, or disclosure.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-4">Changes to This Policy</h2>
        <p className="text-lg mb-4">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page, and we encourage you to review it
          periodically.
        </p>
      </main>
      <Footer />
    </>
  );
}
