import React from 'react'
import TandingProductCard from './TandingProductCard'

function TrandingProducts() {
    return (
        <div className="bg-white pb-12 pt-10 lg:pb-[90px] lg:pt-24">

            <div class="mx-auto mb-12 max-w-[510px] text-center lg:mb-[70px]">
                <h2 class="mb-4 text-3xl font-bold text-black  sm:text-4xl md:text-[40px]">
                    Trending Products
                </h2>
                <p class="text-base text-body-color ">
                    There are many variations of passages of Lorem Ipsum available
                    but the majority have suffered alteration in some form.
                </p>
            </div>

            <div className="flex mx-auto  md:mx-10 border rounded-lg flex-wrap">

                <TandingProductCard />
                <TandingProductCard />
                <TandingProductCard />
                <TandingProductCard />
                <TandingProductCard />
                <TandingProductCard />
            </div>
        </div>
    )
}

export default TrandingProducts
