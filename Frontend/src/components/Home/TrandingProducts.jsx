import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TandingProductCard from './TandingProductCard';

function TrendingProducts() {
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(false); // Added loader state

    const fetchProducts = async () => {
        try {
            setLoader(true); // Set loader to true while fetching data
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/products?price=399`);
        
            setProducts(response.data);
        } catch (error) {
            console.error('Failed to fetch Products info:', error);
        } finally {
            setLoader(false); // Set loader to false after fetching
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="bg-white pb-12 pt-10 lg:pb-[90px] lg:pt-24">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-[70px]">
                <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl md:text-[40px]">
                    Popular Items
                </h2>
                <p className="text-base text-body-color">
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form.
                </p>
            </div>

            <div className="flex mx-auto md:mx-10 border rounded-lg flex-wrap">
                {loader ? (
                    <p>Loading...</p> // Loader message while fetching products
                ) : (
                    products.map((product) => (
                        <TandingProductCard key={product.id} product={product} /> // Use the correct key and component
                    ))
                )}
            </div>
        </div>
    );
}

export default TrendingProducts;
