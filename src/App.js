import React, { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import ProcessedImage from './components/ProcessedImage';

const App = () => {
  const [processedImg, setProcessedImg] = useState(null);

  return (
    <div>
      <h1>Background Removal App</h1>
      <ImageUpload setProcessedImg={setProcessedImg} />
      <ProcessedImage processedImg={processedImg} />
    </div>
  );
};

export default App;
