"use client";

import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="py-4">
      <div
        className="h-[120px] mx-[40px] rounded-lg"
        style={{
          background: "linear-gradient(to right, #84fab0 , #8fd3f4)", // trắng → hồng (Tailwind hồng-400)
        }}
      >
        <Navbar />
      </div>
      
    </header>
  );
}
