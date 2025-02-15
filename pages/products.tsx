import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero2 from "@/components/Hero2";

export default function Products() {
  return (
    <>
      <Navbar />
      <Hero2 />
      <main className="container mx-auto p-6 mt-20">
        <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product 1: Estate Management App */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/estate.png" // Replace with your image path
              alt="Estate Management App"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Estate Management App</h2>
              <p className="text-gray-700">
                Streamline property management with our intuitive and powerful
                estate management solution.
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Learn More
              </button>
            </div>
          </div>

          {/* Product 2: Fintech App */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/fintech.jpg" // Replace with your image path
              alt="Fintech App"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Fintech App</h2>
              <p className="text-gray-700">
                Revolutionize financial transactions with our secure and
                scalable fintech platform.
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Learn More
              </button>
            </div>
          </div>

          {/* Product 3: Trading App */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/trading.png" // Replace with your image path
              alt="Trading App"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Trading App</h2>
              <p className="text-gray-700">
                Experience the next generation of trading with our advanced
                trading platform, designed to replace MetaTrader 5.
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
