"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Premium Quality",
      description: "Made with finest mango pulp and natural ingredients",
      icon: "💎"
    },
    {
      title: "Natural & Healthy",
      description: "No artificial preservatives, only 105 calories",
      icon: "🌿"
    },
    {
      title: "Award Winning",
      description: "Recognized for excellence in taste and quality",
      icon: "⭐"
    },
    {
      title: "Fresh Daily",
      description: "Made fresh to ensure optimal taste and quality",
      icon: "🕐"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-center py-3 px-4">
        <p className="text-sm md:text-base font-medium">
          🚚 FREE SHIPPING on orders over $50! 🎁
        </p>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
            MangoTreasure
          </div>
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#home" className="text-gray-700 hover:text-amber-600 transition font-medium">Home</a>
            <a href="#products" className="text-gray-700 hover:text-amber-600 transition font-medium">Shop Products</a>
            <a href="#story" className="text-gray-700 hover:text-amber-600 transition font-medium">Our Story</a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 transition font-medium">Contact</a>
            <a href="#track" className="text-gray-700 hover:text-amber-600 transition font-medium">Track Orders</a>
            <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-2 rounded-full hover:from-amber-700 hover:to-amber-800 transition font-medium">
              Cart
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent">
              Premium Mango Pudding
            </h1>
            <p className="text-xl md:text-2xl text-amber-700 mb-8">
              Experience the perfect blend of fresh mango and creamy delight
            </p>
            <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition shadow-lg hover:shadow-xl">
              Shop Now
            </button>
          </div>

          {/* Feature Cards Carousel */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {slides.slice(0, 3).map((slide, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition text-center">
                  <div className="text-5xl mb-4">{slide.icon}</div>
                  <h3 className="text-xl font-bold text-amber-700 mb-3">{slide.title}</h3>
                  <p className="text-gray-600">{slide.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <span className="text-amber-600 font-medium">1 / 4</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Introduction Section */}
      <section id="story" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-amber-700">
                Introducing MangoTreasure Mango Pudding
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                MangoTreasure proudly launches a premium mango pudding product that represents the perfect combination of fresh, top-quality mango pulp and natural ingredients that will captivate your taste buds.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our Mango Pudding is a sweet and soft premium dessert that sets a new standard for mango pudding with the deep flavor and freshness of mango.
              </p>
              <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition shadow-lg">
                Learn Our Story
              </button>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 bg-amber-500 text-white px-6 py-2 rounded-full font-bold shadow-lg z-10">
                Real Fruit
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/Habi(ENOG)_1.jpg"
                  alt="MangoTreasure Mango Pudding"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-700 mb-6">
              Why Choose MangoTreasure?
            </h2>
            <p className="text-xl text-gray-600">
              Experience the difference with our premium mango pudding crafted with care and quality
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto text-3xl">
                🌿
              </div>
              <h3 className="text-xl font-bold text-amber-700">Natural Ingredients</h3>
              <p className="text-gray-600">
                Made with real mango pulp and fresh natural ingredients, no artificial additives
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto text-3xl">
                ❤️
              </div>
              <h3 className="text-xl font-bold text-amber-700">Low Calorie</h3>
              <p className="text-gray-600">
                Only 105 calories per serving, perfect for health-conscious dessert lovers
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto text-3xl">
                ⭐
              </div>
              <h3 className="text-xl font-bold text-amber-700">Premium Quality</h3>
              <p className="text-gray-600">
                Award-winning taste and texture that sets new standards in dessert excellence
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto text-3xl">
                🕐
              </div>
              <h3 className="text-xl font-bold text-amber-700">Fresh Daily</h3>
              <p className="text-gray-600">
                Made fresh daily to ensure optimal taste and quality in every cup
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience Premium Taste?
          </h2>
          <p className="text-xl text-amber-50 mb-10 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have made MangoTreasure Mango Pudding their favorite dessert choice
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-amber-50 transition shadow-lg hover:shadow-xl">
              Shop Now
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-amber-600 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gradient-to-br from-amber-900 to-orange-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-amber-300 mb-4">MangoTreasure</h3>
              <p className="text-amber-100">
                Premium mango pudding crafted with love and natural ingredients for the perfect dessert experience.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-amber-300">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-amber-100 hover:text-amber-300 transition">Home</a></li>
                <li><a href="#products" className="text-amber-100 hover:text-amber-300 transition">Products</a></li>
                <li><a href="#story" className="text-amber-100 hover:text-amber-300 transition">Our Story</a></li>
                <li><a href="#contact" className="text-amber-100 hover:text-amber-300 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-amber-300">Customer Service</h4>
              <ul className="space-y-2">
                <li><a href="#track" className="text-amber-100 hover:text-amber-300 transition">Track Orders</a></li>
                <li><a href="#faq" className="text-amber-100 hover:text-amber-300 transition">FAQ</a></li>
                <li><a href="#shipping" className="text-amber-100 hover:text-amber-300 transition">Shipping Info</a></li>
                <li><a href="#returns" className="text-amber-100 hover:text-amber-300 transition">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-amber-300">Connect With Us</h4>
              <p className="text-amber-100 mb-4">Follow us for updates and special offers</p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition">
                  <span className="text-xl">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition">
                  <span className="text-xl">📷</span>
                </a>
                <a href="#" className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition">
                  <span className="text-xl">🐦</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-amber-700 pt-8 text-center text-amber-200">
            <p>&copy; 2025 MangoTreasure. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
