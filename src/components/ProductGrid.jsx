import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  return (
    <div className="product-grid-container max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>

      {/* Responsive Grid for Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* Render multiple ProductCard components */}
        <ProductCard
          imageURL3d="https://res.cloudinary.com/dhturqqs5/image/upload/v1728660727/SIT%20Project/erwon0cp3lyka6raff6u.glb"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6u1bqzVxGo9uMh83YAB8woS5ItaSh7DA5A&s"
          title="Chair"
        />

        {/* Add more ProductCard components as needed */}
        <ProductCard
          imageURL3d="https://res.cloudinary.com/dhturqqs5/image/upload/v1728660727/SIT%20Project/erwon0cp3lyka6raff6u.glb"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqF5EQzEorVdBLcz2LScQCoRH6PQ&s"
          title="Table"
        />
        <ProductCard
          imageURL3d="https://res.cloudinary.com/dhturqqs5/image/upload/v1728660727/SIT%20Project/erwon0cp3lyka6raff6u.glb"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUtYqDg0oSfpb_qHdqfZmI2vTvJIH9TDr9&s"
          title="Lamp"
        />
      </div>
    </div>
  );
};

export default ProductGrid;
