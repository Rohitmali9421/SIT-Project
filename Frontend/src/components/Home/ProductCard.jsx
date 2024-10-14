import React from 'react';
import { FaStar } from 'react-icons/fa'; // For star icons


function ProductCard() {
    return (

        <div className="mx-auto h-full w-80">
            <div className="overflow-hidden rounded-lg bg-white shadow-1">
                <div>
                    <img
                        src="https://demo.tailgrids.com/templates/shopper/build/src/assets/ecom-images/products/product-carousel-05/image-03.jpg"
                        alt="product"
                        className="w-full"
                    />
                </div>
                <div className="p-6">
                    <a
                        href="javascript:void(0)"
                        className="mb-3 block text-lg font-semibold text-dark hover:text-primary xs:text-xl lg:text-lg xl:text-xl"
                    >
                        Apple Watch Series 7
                    </a>
                    <p className="text-base text-body-color">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit enim luctus et lorem.
                    </p>
                </div>
                <div className="flex justify-between border-t border-stroke">
                    <div className="flex items-center gap-1 px-3 py-4 xs:px-4 lg:px-3 xl:px-6">
                        {/* Replace star SVGs with React Icons */}
                        <span>
                            <FaStar color="#FFA645" />
                        </span>
                        <span>
                            <FaStar color="#FFA645" />
                        </span>
                        <span>
                            <FaStar color="#FFA645" />
                        </span>
                        <span>
                            <FaStar color="#FFA645" />
                        </span>
                        <span>
                            <FaStar color="#FFA645" />
                        </span>
                        <span className="pl-1 text-sm font-medium text-body-color">
                            (55) Reviews
                        </span>
                    </div>
                    <div className="border-l border-stroke px-3 py-4 xs:px-4 lg:px-3 xl:px-6">
                        <span className="text-base font-semibold text-dark">
                            ₹299
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
