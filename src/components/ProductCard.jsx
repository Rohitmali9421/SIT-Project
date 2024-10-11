import React from 'react';

const ProductCard = () => {

  // Handle the AR button click to activate AR mode
  const handleARClick = () => {
    const modelViewer = document.getElementById('ar-model-viewer');
    modelViewer.setAttribute('src', 'https://res.cloudinary.com/dhturqqs5/image/upload/v1728654668/SIT%20Project/hslyyj3edosdaplfuaui.glb');
    modelViewer.activateAR(); // Trigger AR mode
  };

  return (
    <div className="product-card bg-white rounded-lg shadow-md p-4 text-center">
      {/* Product Image */}
      <img
        className="product-image mb-4 rounded-md"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNHL0-PgalMFn9qZjqiI_fB5GOAFv2FQHT9g&s" // Placeholder image URL
        alt="LED Screen Placeholder"
      />

      {/* AR Button */}
      <button
        className="ar-button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
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
