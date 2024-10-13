import React from 'react';
import { FaRegCircle } from 'react-icons/fa'; // Import circle icon from React Icons
import { FaStar } from 'react-icons/fa'; // For star icons
function TandingProductCard() {
    return (
        <div className="w-full border-b border-stroke px-6 md:w-1/2 md:border-r lg:w-1/3">
            <div className="my-6">
                <div className="mb-5 overflow-hidden rounded-md">
                    <img
                        src="https://demo.tailgrids.com/templates/shopper/build/src/assets/ecom-images/products/products-grids-05/image-02.jpg"
                        alt="product"
                        className="w-full"
                    />
                </div>
                <div>
                    <span className="mb-[10px] block text-lg font-semibold text-dark">
                        $59.55
                    </span>

                    <h3>
                        <a
                            href="javascript:void(0)"
                            className="mb-2 block text-xl font-semibold text-dark hover:text-primary sm:text-2xl md:text-lg 2xl:text-2xl"
                        >
                            Table Top Showpiece
                        </a>
                    </h3>
                    <p className="flex items-center text-base text-body-color">
                        <div className="flex items-center gap-1 ">
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

                    </p>
                </div>
            </div>
        </div>
    );
}

export default TandingProductCard;
