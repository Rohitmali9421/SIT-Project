import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="max-w-sm mx-auto"> {/* Limit card width for consistency */}
      <Link to={`/products/${product._id}`} className="group">
        <div className="w-full h-64 overflow-hidden rounded-lg bg-gray-200">
          <img
            alt={product.title}
            src={`${product.image.url}?w=300&h=300&c=fill&q=80`} // Ensure fixed size (300x300) via Cloudinary
            className="w-full h-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
        <div className="flex justify-between mt-1">
          <p className="text-lg font-medium text-gray-900">${product.price}</p>
          <button className="bg-gray-200 px-3 rounded-sm">Add to cart</button>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
