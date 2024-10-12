import React from 'react';

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero text-center p-10 bg-cover bg-center" style={{ backgroundImage: "url('hero-bg.jpg')" }}>
      <h2 className="text-2xl md:text-4xl font-bold mb-5">Experience Products Like Never Before</h2>
      <p className="text-lg md:text-xl mb-5">View and interact with your favorite products in your own space with our AR viewer.</p>
      <button 
        onClick={scrollToProducts} 
        className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded"
      >
        Explore Products
      </button>
    </section>
  );
};

export default Hero;
