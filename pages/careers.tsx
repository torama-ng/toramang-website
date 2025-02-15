import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Careers() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-6 mt-20">
        <h1 className="text-4xl font-bold mb-4">Careers </h1>
        <p className="text-lg">
          Torama is a leading technology company specializing in estate
          management, fintech, and trading solutions. Software engineers needed.
          Send your resume to{" "}
          <a
            href="mailto:jobs@torama.ng"
            className="text-blue-600 hover:underline"
          >
            jobs@torama.ng
          </a>
        </p>
      </main>
      <Footer />
    </>
  );
}
