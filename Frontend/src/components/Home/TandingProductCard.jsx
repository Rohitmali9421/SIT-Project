import React from 'react';
import { FaStar } from 'react-icons/fa'; // For star icons
import { Link } from 'react-router-dom';

function TandingProductCard({ product }) {
  return (
    <div className="w-full border-b border-stroke px-6 md:w-1/2 md:border-r lg:w-1/3">
      <div className="my-6">
        <Link to={`/products/${product._id}`}>
          <div className="mb-5 overflow-hidden rounded-md h-64 relative">
            {/* Set a fixed height and cover the area */}
            <img
              src={`${product.image.url}?w=300&h=300&c=fill&q=80`} // Use the original image URL
              alt={product.title} // Updated alt attribute
              className="w-full h-full object-cover object-center" // Ensure the image covers the container
            />
          </div>
          <div>
            <span className="mb-[10px] block text-lg font-semibold text-dark">
            ₹{product.price} {/* Display the product price dynamically */}
            </span>

            <h3>
              <a
                href="javascript:void(0)"
                className="mb-2 block text-xl font-semibold text-dark hover:text-primary sm:text-2xl md:text-lg 2xl:text-2xl"
              >
                {product.name} {/* Display the product name dynamically */}
              </a>
            </h3>
            <p className="flex items-center text-base text-body-color">
              <div className="flex items-center gap-1">
                {/* Render star icons for ratings */}
                {[...Array(5)].map((_, index) => (
                  <span key={index}>
                    <FaStar color="#FFA645" />
                  </span>
                ))}
                <span className="pl-1 text-sm font-medium text-body-color">
                  (55) Reviews
                </span>
              </div>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default TandingProductCard;
