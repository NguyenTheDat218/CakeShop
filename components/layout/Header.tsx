"use client";

import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="bg-pastelPink shadow-md">
      <div className="container mx-auto flex items-center justify-center p-4">
        
        {/* Navbar */}
        <Navbar />
      </div>
    </header>
  );
}
