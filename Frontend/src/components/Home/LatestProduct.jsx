import React, { useState, useRef } from 'react';
import ProductCard from './ProductCard'; // Adjust the import path as needed
import TandingProductCard from './TandingProductCard';

function LatestProduct() {

    return (
        <section className="bg-[#fafafa] pb-12 pt-10 lg:pb-[90px] ">
            <div className="container mx-auto">
                <div className="w-full px-4">
                    <div className="mx-auto mb-12  text-center lg:mb-[70px]">
                        <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                            Our Latest Products
                        </h2>
                        <p className="text-base text-body-color">
                            There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
                        </p>
                    </div>
                </div>


                <div className="flex mx-auto  md:mx-10 border rounded-lg flex-wrap">

                    <TandingProductCard />
                    <TandingProductCard />
                    <TandingProductCard />
                </div>
            </div>
        </section>
    );
}

export default LatestProduct;
