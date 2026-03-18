export interface GameDetails {
  releaseDate?: string;
  players?: string;
  genre?: string;
  platform?: string;
  gameplay?: string;
  publisher?: string;
  developer?: string;
  perspective?: string;
  narrative?: string;
  fileSize?: string;
  esrbRating?: string;
}
export interface Product {
  id: string;
  slug: string;
  title: string;
  price: number;
  category: string;
  posterImage: string;
  detailContent: string[];
  galleryImages?: string[];
  gameDetails?: GameDetails;
}

export interface ProductCardProps {
  product: Product;
}
