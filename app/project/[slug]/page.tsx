import { notFound } from 'next/navigation';
import { products } from '../../../data/products';
import Navbar from '../../../components/Navbar';
import ProjectHero from '../../../components/ProjectHero';
import ProjectGallery from '../../../components/ProjectGallery';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Navbar Overlay */}
      <div className="relative">
        <Navbar />
        <ProjectHero product={product} />
      </div>
      
      {/* Detail Content Section */}
      <section className="py-1 md:py-8 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="prose prose-lg max-w-none">
          {product.detailContent.map((paragraph, index) => (
            <p key={index} className="leading-6 text-xl mb-6">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
      
      {/* Gallery Section */}
      {product.galleryImages && product.galleryImages.length > 0 && (
        <ProjectGallery images={product.galleryImages} title={product.title} />
      )}
    
    </div>
  );
}

// Generate static params for all products (optional optimization)
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
} 