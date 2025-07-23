import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types/product';

interface ProductsGridProps {
  products: Product[];
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ products }) => {
  return (
    <div id="projects" className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-left mb-4 mt-20">
        <h1 className="font-bold text-[#00B341] leading-none mb-6">
          <div className="text-2xl md:text-3xl lg:text-4xl">VIEWING</div>
          <div className="text-4xl md:text-5xl lg:text-6xl">PROJECTS</div>
        </h1>
        <p className="text-black text-lg font-medium">
          {products.length} result{products.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 xl:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Empty State */}
      {products.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">📦</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-600">Try adjusting your search or browse our categories.</p>
        </div>
      )}
    </div>
  );
};

export default ProductsGrid; 