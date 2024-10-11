import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
    document.head.appendChild(script);
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <div className='flex flex-wrap'> 
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard /> 
      </div>
      

      {/* Full-screen model viewer for AR */}
      <model-viewer
        id="ar-model-viewer"
        ar-modes="scene-viewer quick-look webxr"
        ar
        disable-tap
        disable-pan
        camera-controls
        touch-action="pan-y"
        auto-rotate
        xr-environment
        style={{
          display: 'none', // Initially hidden
          width: '100%',
          height: '100vh',
          position: 'fixed',
          top: '0',
          left: '0',
          zIndex: '1000',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        }}
      ></model-viewer>

      <Footer />
    </div>
  );
}

export default App;
