import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) { // Destructure product from props
  return (
    <div>
      <Link to={`/products/${product._id}`} className="group"> {/* Use a route for the link */}
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            alt={product.title} // Use product title for alt text
            src={product.image.url}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
        <div className="flex justify-between">
          <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p> {/* Add dollar sign */}
          <button className="bg-gray-200 px-3 rounded-sm">Add to cart</button>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
