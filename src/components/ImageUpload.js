import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = ({ setProcessedImg }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setProcessedImg(response.data.processedImg);
    } catch (error) {
      console.error('Error uploading the image', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageChange} required />
        <button type="submit">Upload Image</button>
      </form>
    </div>
  );
};

export default ImageUpload;
