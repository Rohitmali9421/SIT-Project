import React from 'react';
import ProductCard from './ProductCard';


const ProductGrid = () => {
  return (
    <div className="product-grid-container max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>

      {/* Responsive Grid for Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* Render multiple ProductCard components */}
        <ProductCard imageURL3d="https://res.cloudinary.com/dhturqqs5/image/upload/v1728661338/SIT%20Project/irpooy3sv0urgtsd3rzj.glb" imgaeUrl=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6u1bqzVxGo9uMh83YAB8woS5ItaSh7DA5A&s" title="Chair " />
        
        {/* Add more ProductCard components as needed */}
      </div>
    </div>
  );
};

export default ProductGrid;
