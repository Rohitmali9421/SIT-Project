import React from 'react';

const ProductCard = ({imageURL3d,imgaeUrl ,title}) => {

  // Handle the AR button click to activate AR mode
  const handleARClick = () => {
    const modelViewer = document.getElementById('ar-model-viewer');
    modelViewer.setAttribute('src', {imageURL3d});
    modelViewer.activateAR(); // Trigger AR mode
  };

  return (
    <div className="product-card bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
      {/* Product Image */}
      <img
        className="product-image mb-4 rounded-lg object-contain h-48 w-full"
        src={imgaeUrl} 
        alt="LED Screen Placeholder"
      />

      {/* Product Title */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">{title}</h2>

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
