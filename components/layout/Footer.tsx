export default function Footer() {
  return (
    <footer className="bg-pastelPink mt-10">
      <div className="container mx-auto text-center py-6">
        <p className="text-brandBrown font-light">
          © {new Date().getFullYear()} CakeJell. Sweet moments for your life 🍰
        </p>
      </div>
    </footer>
  );
}
