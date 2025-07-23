export interface Product {
  id: string;
  slug: string;
  title: string;
  price: number;
  category: string;
  posterImage: string;
  detailContent: string[];
  galleryImages?: string[]; // Array of up to 6 gallery image URLs
}

export interface ProductCardProps {
  product: Product;
} 