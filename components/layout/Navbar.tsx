"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-full flex items-center justify-between">
      {/* Logo + Tên */}
      <Link href="/" className="flex items-center ml-10">
        <Image
          src="/images/logo/jellyfish.png" // đường dẫn tới ảnh trong thư mục public
          alt="Logo CakeJell"
          width={60}
          height={60}
          priority={true} // ưu tiên tải ảnh
          className="rounded-full object-cover"
        />
        <span className="text-2xl font-bold  ml-3">Cô chủ nhỏ</span>
      </Link>
      <div className="flex space-x-6 text-3xl font-medium mr-25">
        <Link href="/">Trang chủ</Link>
        <Link href="/menu">Menu bánh</Link>
        <Link href="/contact">Liên hệ</Link>
        <Link href="/news">Tin tức</Link>
      </div>
    </div>
  );
}
