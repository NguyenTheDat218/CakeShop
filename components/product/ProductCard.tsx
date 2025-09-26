"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ id, name, price, image }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col hover:shadow-lg transition">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      <div className="mt-3 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-brand-pink">{name}</h3>
        <p className="text-brand-brown font-medium mt-1">{price.toLocaleString()} đ</p>
        <button
          className="mt-auto flex items-center gap-2 bg-brand-pink text-white py-2 px-3 rounded-xl hover:bg-brand-pink/80 transition"
        >
          <ShoppingCart size={18} /> Thêm vào giỏ
        </button>
      </div>
    </div>
  );
}
