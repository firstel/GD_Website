import ProductsGrid from '../components/ProductsGrid';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import TeamSection from '../components/TeamSection';
import { products } from '../data/products';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Navbar Overlay */}
      <div className="relative">
        <Navbar />
        <HeroSection />
      </div>
      
      {/* Main Content */}
      <main>
        <ProductsGrid products={products} />
      </main>

      {/* Team Section */}
      <TeamSection />
    </div>
  );
}
