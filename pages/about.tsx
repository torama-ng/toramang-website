import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero2 from "@/components/Hero2";

export default function About() {
  return (
    <>
      <Navbar />
      <Hero2 />
      <main className="container mx-auto p-6 mt-20">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          Torama is a leading technology company specializing in estate
          management, fintech, and trading solutions.
        </p>
      </main>
      <Footer />
    </>
  );
}
