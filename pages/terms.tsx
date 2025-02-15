import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <>
      <Navbar />
      {/* <Hero2 /> */}
      <main className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-lg mb-4">
          Welcome to Torama! These Terms of Service govern your use of our
          website and services. By accessing or using our website, you agree to
          comply with these terms.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-4">Acceptance of Terms</h2>
        <p className="text-lg mb-4">
          By using our website, you confirm that you have read, understood, and
          agree to these Terms of Service. If you do not agree, please do not
          use our website.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-4">Use of Our Services</h2>
        <p className="text-lg mb-4">
          You agree to use our services only for lawful purposes and in a manner
          that does not infringe the rights of others or restrict their use of
          the website.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-4">Intellectual Property</h2>
        <p className="text-lg mb-4">
          All content on this website, including text, graphics, logos, and
          software, is the property of Torama and is protected by intellectual
          property laws.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-4">
          Limitation of Liability
        </h2>
        <p className="text-lg mb-4">
          Torama is not liable for any damages arising from your use of our
          website or services. We provide our services &quot;as is&quot; without
          warranties of any kind.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-4">Changes to Terms</h2>
        <p className="text-lg mb-4">
          We reserve the right to modify these Terms of Service at any time.
          Your continued use of the website constitutes acceptance of the
          updated terms.
        </p>
      </main>
      <Footer />
    </>
  );
}
