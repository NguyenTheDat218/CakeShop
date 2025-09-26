"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
            

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-pink-700 hover:text-pink-500">
              Trang chủ
            </Link>
            <Link href="/products" className="text-pink-700 hover:text-pink-500">
              Sản phẩm
            </Link>
            <Link href="/about" className="text-pink-700 hover:text-pink-500">
              Giới thiệu
            </Link>
            <Link href="/contact" className="text-pink-700 hover:text-pink-500">
              Liên hệ
            </Link>
          </div>

          {/* Cart + mobile toggle */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-pink-700 hover:text-pink-500">
              <ShoppingCart size={22} />
              <span className="absolute -top-1 -right-1 rounded-full bg-pink-500 text-white text-xs px-1">
                2
              </span>
            </button>

            <button
              className="md:hidden p-2 rounded-md text-pink-700 hover:bg-pink-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-pink-50">
          <Link href="/" className="block text-pink-700 hover:text-pink-500">
            Trang chủ
          </Link>
          <Link href="/products" className="block text-pink-700 hover:text-pink-500">
            Sản phẩm
          </Link>
          <Link href="/about" className="block text-pink-700 hover:text-pink-500">
            Giới thiệu
          </Link>
          <Link href="/contact" className="block text-pink-700 hover:text-pink-500">
            Liên hệ
          </Link>
        </div>
      )}
    </nav>
  );
}
