"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

const dummyProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$59.99",
    image: "https://i.pinimg.com/736x/43/15/ae/4315ae69df9daa2550203db798b0d77f.jpg",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$129.99",
    image: "https://i.pinimg.com/736x/1b/ac/08/1bac089c549887eb46149d84d11cca7c.jpg",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: "$39.99",
    image: "https://i.pinimg.com/1200x/1f/09/d5/1f09d59463dbd1445ab45647df4fe68d.jpg",
  },
  {
    id: 4,
    name: "VR Headset",
    price: "$199.99",
    image: "https://i.pinimg.com/736x/d8/e2/41/d8e24126520f7ea920781dc3bb9fc15c.jpg",
  },
];

const services = [
  {
    title: "Fast Delivery",
    desc: "Get your products delivered within 2-3 business days.",
    icon: "🚚",
  },
  {
    title: "Secure Payments",
    desc: "We provide secure and encrypted payment methods.",
    icon: "🔒",
  },
  {
    title: "24/7 Support",
    desc: "Our support team is here for you anytime.",
    icon: "📞",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://i.pinimg.com/1200x/d0/87/d0/d087d06c9cda1142020f18f2735a0317.jpg",
    "https://i.pinimg.com/736x/77/0d/09/770d0954b7760d84467ad89ad30ca245.jpg",
    "https://i.pinimg.com/1200x/6d/6f/89/6d6f8918f3aff65731e5defb7e092328.jpg",
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="w-full bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-green-600 tracking-tight">GaniPedia</h1>
        <div className="space-x-4">
          <Link href="/auth/sign-in">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="/shop">
            <Button variant="primary">Shop Now</Button>
          </Link>
        </div>
      </nav>

      {/* Carousel */}
      <section className="relative w-full max-w-7xl mx-auto mt-6 overflow-hidden rounded-2xl shadow-lg">
        <div className="w-full h-[420px] relative">
          <Image
            src={slides[currentSlide]}
            alt="Promotional Banner"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>
        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2">
          <button onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))} className="text-white text-3xl bg-black bg-opacity-30 px-4 py-2 rounded-full">◀</button>
          <button onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))} className="text-white text-3xl bg-black bg-opacity-30 px-4 py-2 rounded-full">▶</button>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Why Shop with Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-green-50 border border-green-200 p-8 rounded-2xl shadow hover:shadow-lg transition-all">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {dummyProducts.map((product) => (
            <div key={product.id} className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md p-4 transition-all">
              <div className="w-full h-48 relative mb-4 rounded-md overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-base font-medium text-gray-800 mb-1 truncate">{product.name}</h3>
              <p className="text-green-600 text-md font-semibold mb-3">{product.price}</p>
              <Button href={`/product/${product.id}`} className="w-full" variant="primary">
                View Details
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 border-t py-10 text-center text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} GaniPedia. All rights reserved.</p>
      </footer>
    </main>
  );
}