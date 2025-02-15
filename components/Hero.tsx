import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">
          AI-Powered Innovation for a Smarter Future
        </h1>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          At Torama, we harness the power of cutting-edge AI models and advanced
          machine learning engines to build intelligent applications for
          fintech, trading, and estate management. Our AI-driven solutions
          optimize decision-making, enhance efficiency, and unlock new
          possibilities for businesses and individuals alike.
        </p>
        <div className="flex gap-4 justify-center">
          {/* Link to Products Page */}
          <Link href="/products">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Discover Our AI Solutions
            </button>
          </Link>

          {/* Link to Contact Page */}
          <Link href="/contact">
            <button className="px-6 py-3 bg-transparent border border-white text-white rounded-lg hover:bg-white hover:text-gray-900">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
