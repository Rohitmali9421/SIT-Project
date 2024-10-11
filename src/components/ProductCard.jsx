import React, { useState } from 'react';

const ProductCard = () => {
    const [isModelLoaded, setIsModelLoaded] = useState(false); // To track model load status

    // Handle the AR click to activate AR mode
    const handleARClick = () => {
        const modelViewer = document.getElementById('ar-model-viewer');
        modelViewer.setAttribute('src', 'https://res.cloudinary.com/dhturqqs5/image/upload/v1728654668/SIT%20Project/hslyyj3edosdaplfuaui.glb');
        modelViewer.style.display = 'block';
        modelViewer.activateAR();
    };

    // Handle 3D model load event
    const handleModelLoad = () => {
        setIsModelLoaded(true);
    };

    // Handle 3D model error event (if it fails to load)
    const handleModelError = () => {
        setIsModelLoaded(false); // You can add additional error handling here if needed
    };

    return (
        <div className="product-card bg-white rounded-lg shadow-md p-4 text-center">
            {/* Fallback image shown until 3D model is loaded */}
            {!isModelLoaded && (
                <img
                    className="product-image mb-4 rounded-md"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNHL0-PgalMFn9qZjqiI_fB5GOAFv2FQHT9g&s" // Placeholder image URL
                    alt="LED Screen Placeholder"
                />
            )}

            {/* 3D Model Viewer for preview */}
            <model-viewer
                className="product-model"
                src="https://res.cloudinary.com/dhturqqs5/image/upload/v1728654668/SIT%20Project/hslyyj3edosdaplfuaui.glb" // Replace with actual GLB model URL
                alt="LED Screen"
                camera-controls
                auto-rotate
                onLoad={handleModelLoad}     // Show the model when it's loaded
                onError={handleModelError}   // Handle model load errors
                style={{
                    width: '100%',
                    height: '300px',
                    marginBottom: '15px',
                    display: isModelLoaded ? 'block' : 'none'  // Hide model until it's fully loaded
                }}
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
