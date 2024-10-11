import React from 'react';

const ProductCard = () => {

  // Handle the AR button click to activate AR mode
  const handleARClick = () => {
    const modelViewer = document.getElementById('ar-model-viewer');
    modelViewer.setAttribute('src', 'https://res.cloudinary.com/dhturqqs5/image/upload/v1728660727/SIT%20Project/erwon0cp3lyka6raff6u.glb');
    modelViewer.activateAR(); // Trigger AR mode
  };

  return (
    <div className="product-card bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
      {/* Product Image */}
      <img
        className="product-image mb-4 rounded-lg object-contain h-48 w-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNHL0-PgalMFn9qZjqiI_fB5GOAFv2FQHT9g&s" 
        alt="LED Screen Placeholder"
      />

      {/* Product Title */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">LED Screen</h2>

      {/* AR Button */}
      <button
        className="ar-button bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
        onClick={handleARClick}
      >
        View in AR
      </button>

      {/* Hidden AR model viewer for full-screen AR mode */}
      <model-viewer
        id="ar-model-viewer"
        ar
        ar-modes="scene-viewer quick-look webxr"
        camera-controls
        auto-rotate
        style={{ display: 'none' }}  
      ></model-viewer>
    </div>
  );
};

export default ProductCard;
