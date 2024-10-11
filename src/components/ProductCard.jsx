import React from 'react';

const ProductCard = () => {
  const handleARClick = () => {
    const modelViewer = document.getElementById('ar-model-viewer');
    
    // Set the correct model source
    modelViewer.setAttribute('src', 'https://res.cloudinary.com/dhturqqs5/image/upload/v1728654668/SIT%20Project/hslyyj3edosdaplfuaui.glb');
    
    // Display model viewer and activate AR
    modelViewer.activateAR();
  };

  return (
    <div className="product-card bg-white rounded-lg shadow-md p-4 text-center">
      <img
        className="product-image mb-4 rounded-md"
        src="https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/v1610000000/product_image.jpg"
        alt="LED Screen Image"
      />
      <h2 className="product-title text-2xl font-semibold mb-2">LED Screen</h2>
      <p className="product-description text-gray-600 mb-4">
        A great product for your needs. Discover its features and view in AR.
      </p>

      {/* 3D Model Viewer for preview */}
      <model-viewer
        className="product-model"
        src="https://res.cloudinary.com/dhturqqs5/image/upload/v1728654668/SIT%20Project/hslyyj3edosdaplfuaui.glb"
        alt="LED Screen"
        camera-controls
        auto-rotate
        ar
        ar-modes="scene-viewer quick-look webxr"
        xr-environment
        style={{ width: '100%', height: '300px', marginBottom: '15px' }}
      ></model-viewer>

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
        style={{ display: 'none' }}  // Hidden by default
      ></model-viewer>
    </div>
  );
};

export default ProductCard;
