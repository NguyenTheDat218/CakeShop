import ProductCard from "@/components/product/ProductCard";
import Image from "next/image";

const mockProducts = [
  {
    id: "1",
    name: "Bánh Chocolate",
    price: 120000,
    image: "/images/cakes/chocolate.png",
  },
  {
    id: "2",
    name: "Bánh Dâu Kem",
    price: 150000,
    image: "/images/cakes/strawberry.png",
  },
  {
    id: "3",
    name: "Bánh Matcha",
    price: 135000,
    image: "/images/cakes/matcha.png",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-brand-pink/20 flex items-center justify-center">
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-brown drop-shadow-lg">
            Chào mừng đến với Cake Shop 🎂
          </h1>
          <p className="mt-3 text-lg text-brand-brown/80">
            Ngọt ngào – Tươi mới – Đậm đà hương vị
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-brand-brown mb-6">
          Bánh nổi bật
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </main>
  );
}
