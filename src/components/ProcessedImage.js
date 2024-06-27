import React from 'react';

const ProcessedImage = ({ processedImg }) => {
  return (
    <div>
      {processedImg && (
        <>
          <img src={`data:image/png;base64,${processedImg}`} alt="Processed" />
          <a href={`data:image/png;base64,${processedImg}`} download="processed_image.png">
            <button>Download Image</button>
          </a>
        </>
      )}
    </div>
  );
};

export default ProcessedImage;
