import Link from "next/link";

export default function Hero2() {
  return (
    <section className="relative h-[400px] flex items-center justify-center text-white overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken the video (optional) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-1"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Innovating the Future of Technology
        </h1>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          At Torama, we specialize in developing cutting-edge solutions for
          estate management, fintech, and trading. Our mission is to empower
          businesses and individuals with innovative tools that simplify complex
          processes and drive growth.
        </p>
        <div className="flex gap-4 justify-center">
          {/* Link to Products Page */}
          <Link href="/products">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Explore Our Products
            </button>
          </Link>

          {/* Link to Contact Page */}
          <Link href="/contact">
            <button className="px-6 py-3 bg-transparent border border-white text-white rounded-lg hover:bg-white hover:text-gray-900">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
