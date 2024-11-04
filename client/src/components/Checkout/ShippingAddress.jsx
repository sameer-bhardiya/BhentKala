import React, { useState } from 'react';
import styled from 'styled-components';

// Container for the entire form
const FormContainer = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  width: 400px;
  margin: 2% auto;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

// Styling for the input fields
const Input = styled.input`
  margin-bottom: 15px;
  padding: 12px;
  width: 100%;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #0073e6;
    outline: none;
  }
`;

// Styling for the select fields
const Select = styled.select`
  margin-bottom: 15px;
  padding: 12px;
  width: 100%;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #0073e6;
    outline: none;
  }
`;

// Button styling
const Button = styled.button`
  padding: 12px 20px;
  background-color: #0073e6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  width: 100%;
  margin-top: 10px;

  &:hover {
    background-color: #005bb5;
  }

  &:focus {
    outline: none;
  }
`;

// Header styling
const FormHeader = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

// The Shipping Address component itself
const ShippingAddress = ({ onSaveAddress }) => {
  const [formData, setFormData] = useState({
    country: 'India',
    fullName: '',
    mobileNumber: '',
    pincode: '',
    flat: '',
    area: '',
    landmark: '',
    city: '',
    state: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onSaveAddress(formData);
  };

  return (
    <FormContainer>
      <FormHeader>Enter a New Shipping Address</FormHeader>
      <Select name="country" value={formData.country} onChange={handleInputChange}>
        <option value="India">India</option>
        {/* Add more country options */}
      </Select>
      <Input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        name="mobileNumber"
        placeholder="Mobile Number"
        value={formData.mobileNumber}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        name="pincode"
        placeholder="Pincode"
        value={formData.pincode}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        name="flat"
        placeholder="Flat, House no., Building, Apartment"
        value={formData.flat}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        name="area"
        placeholder="Area, Street, Sector, Village"
        value={formData.area}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        name="landmark"
        placeholder="Landmark (optional)"
        value={formData.landmark}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        name="city"
        placeholder="Town/City"
        value={formData.city}
        onChange={handleInputChange}
      />
      <Select name="state" value={formData.state} onChange={handleInputChange}>
        <option value="">Choose a state</option>
        {/* Add state options */}
      </Select>
      <Button onClick={handleSubmit}>Use This Address</Button>
    </FormContainer>
  );
};

export default ShippingAddress;
