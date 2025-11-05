import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="text-3xl font-bold text-amber-600">
              Mango<span className="text-amber-800">Treasure</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-amber-600 transition">About</a>
            <a href="#products" className="text-gray-700 hover:text-amber-600 transition">Products</a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 transition">Contact</a>
          </div>
          <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition">
            Buy Now
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Discover the <span className="text-amber-600">Treasure</span> of Tropics
            </h1>
            <p className="text-xl text-gray-600">
              Premium mango pudding with nata de coco. 100% real mango, no preservatives, crafted with love.
            </p>
            <div className="flex space-x-4">
              <button className="bg-amber-600 text-white px-8 py-3 rounded-full text-lg hover:bg-amber-700 transition shadow-lg">
                Shop Now
              </button>
              <button className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-full text-lg hover:bg-amber-50 transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative h-[500px]">
            <Image
              src="/images/Habi(ENOG)_1.jpg"
              alt="Mango Treasure Product"
              fill
              className="object-contain rounded-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose MangoTreasure?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">100% Real Mango</h3>
              <p className="text-gray-600">Made with authentic Alphonso mango puree for the richest flavor</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">No Preservatives</h3>
              <p className="text-gray-600">Pure and natural ingredients, no artificial additives</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Nata de Coco</h3>
              <p className="text-gray-600">Chewy coconut jelly adds delightful texture and fiber</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Premium Collection
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <div key={num} className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition group">
                <Image
                  src={`/images/Habi(ENOG)_${num}.jpg`}
                  alt={`Mango Treasure Product ${num}`}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-500 to-amber-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Taste the Treasure?
          </h2>
          <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto">
            Experience the golden taste of authentic mango pudding. Available now on Amazon and select retailers.
          </p>
          <button className="bg-white text-amber-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-amber-50 transition shadow-lg">
            Order on Amazon
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-amber-400 mb-4">MangoTreasure</h3>
              <p className="text-gray-400">Discover the Treasure of Tropics</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-amber-400 transition">About Us</a></li>
                <li><a href="#products" className="hover:text-amber-400 transition">Products</a></li>
                <li><a href="#contact" className="hover:text-amber-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p className="text-gray-400">Email: info@mangotreasure.com</p>
              <p className="text-gray-400">Follow us on social media</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 MangoTreasure. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
