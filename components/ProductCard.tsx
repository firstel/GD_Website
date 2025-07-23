import Image from 'next/image';
import Link from 'next/link';
import { ProductCardProps } from '../types/product';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/project/${product.slug}`} className="group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full aspect-[433/244] block">
      {/* Product Image */}
      <div className="relative w-full h-full">
        <Image
          src={product.posterImage}
          alt={product.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
        {/* Title */}
        <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl leading-none mb-2 drop-shadow-lg">
          {product.title}
        </h3>
        
        {/* Category */}
        <p className="text-white/90 text-xs sm:text-sm font-medium drop-shadow-md">
          {product.category}
        </p>
      </div>
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Link>
  );
};

export default ProductCard; 