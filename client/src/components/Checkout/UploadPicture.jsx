// components/Checkout/UploadPicture.js
import React, { useState } from "react";
import styled from "styled-components";

// Styled components for styling the file upload UI
const Container = styled.div`
  width: 80%;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Heading = styled.h3`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const Input = styled.input`
  display: inline-block;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  font-size: 16px;
  color: #333;

  &:hover {
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  background-color: teal;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #006666;
  }
`;

const FileName = styled.p`
  margin-top: 15px;
  font-size: 16px;
  color: #555;
`;

const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 300px;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Acknowledgment = styled.p`
  margin-top: 20px;
  font-size: 18px;
  color: green;
  font-weight: bold;
`;

const UploadPicture = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false); // New state for upload acknowledgment

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);

      // Create an image preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set the image source to the file's result
      };
      reader.readAsDataURL(selectedFile); // Read the file as a Data URL
    }
  };

  const handleSubmit = () => {
    if (file) {
      onUpload(file); // Call the parent component's upload handler
      setUploadSuccess(true); // Set success acknowledgment
    }
  };

  return (
    <Container>
      <Heading>Upload Your Picture</Heading>
      <Input type="file" onChange={handleFileChange} />
      <Button onClick={handleSubmit}>Upload</Button>

      {file && <FileName>File: {file.name}</FileName>}

      {imagePreview && <ImagePreview src={imagePreview} alt="Image Preview" />}

      {/* Display acknowledgment message after successful upload */}
      {uploadSuccess && <Acknowledgment>Successfully uploaded the image!</Acknowledgment>}
    </Container>
  );
};

export default UploadPicture;
