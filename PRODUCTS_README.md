# Products Management Guide

This guide explains how to easily add, modify, and manage products in your Next.js application.

## Adding New Products

### Method 1: Direct Addition to Products Array

1. Open `data/products.ts`
2. Add a new product object to the `products` array:

```typescript
{
  id: '7', // Use a unique ID
  title: 'YOUR PRODUCT TITLE',
  price: 199.99,
  category: 'Your Category',
  posterImage: '/products/your-image.jpg',
  detailContent: 'Detailed description of your product...'
}
```

### Method 2: Using the Helper Function

```typescript
import { addProduct } from '../data/products';

const newProduct = addProduct({
  title: 'YOUR PRODUCT TITLE',
  price: 199.99,
  category: 'Your Category',
  posterImage: '/products/your-image.jpg',
  detailContent: 'Detailed description of your product...'
});
```

## Adding Product Images

1. Add your product images to the `public/products/` directory
2. Use the format: `/products/your-image-name.jpg`
3. Recommended image dimensions: 800x600px (4:3 aspect ratio)
4. Supported formats: JPG, PNG, WebP

## Product Categories

Current categories in use:
- `Licensing`
- `Licensing — Commercials`

You can create new categories by simply using them in the product data.

## Product Fields Explained

- **id**: Unique identifier for the product
- **title**: Product name (displayed prominently on the card)
- **price**: Product price (displayed as currency)
- **category**: Product category (shown as a badge)
- **posterImage**: Path to the product image
- **detailContent**: Detailed description (for future use in detail pages)

## Responsive Design

The product cards are fully responsive:
- **Mobile**: 1 column
- **Tablet**: 2 columns
- **Desktop**: 3 columns

## Hover Effects

Each product card includes:
- Scale animation on hover
- Image zoom effect
- Overlay appearance
- "View Details" button fade-in
- Subtle border glow

## Helper Functions Available

```typescript
// Get products by category
const licensingProducts = getProductsByCategory('Licensing');

// Get all unique categories
const allCategories = getCategories();
```

## File Structure

```
gamers_digital/
├── components/
│   ├── ProductCard.tsx      # Individual product card component
│   └── ProductsGrid.tsx     # Grid layout for products
├── data/
│   └── products.ts          # Product data and helper functions
├── types/
│   └── product.ts           # TypeScript interfaces
└── public/
    └── products/            # Product images directory
```

## Tips for Best Results

1. **Image Quality**: Use high-quality images with consistent aspect ratios
2. **Title Length**: Keep titles concise but descriptive
3. **Categories**: Use consistent category naming
4. **Pricing**: Use consistent currency formatting
5. **Descriptions**: Write engaging detail content for future use

## Example: Adding a New Product

1. Add your image to `public/products/new-product.jpg`
2. Open `data/products.ts`
3. Add to the products array:

```typescript
{
  id: '7',
  title: 'NEW AWESOME PRODUCT',
  price: 299.99,
  category: 'Premium',
  posterImage: '/products/new-product.jpg',
  detailContent: 'This is an amazing new product with incredible features...'
}
```

4. Save the file - your new product will appear automatically!

## Customization

To modify the card appearance, edit:
- `components/ProductCard.tsx` for individual card styling
- `components/ProductsGrid.tsx` for grid layout
- `app/globals.css` for global styles

The design uses Tailwind CSS classes for easy customization. 