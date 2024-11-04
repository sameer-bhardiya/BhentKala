import React from 'react';
import styled from 'styled-components';

// Container for the order summary
const SummaryContainer = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  width: 300px;
  margin: 0 auto;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

// Styling for the product image
const Image = styled.img`
  width: 100%;
  max-width: 200px;
  border-radius: 8px;
  margin: 10px 0;
  object-fit: cover;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

// Styling for headings
const Heading = styled.h2`
  text-align: center;
  font-size: 22px;
  margin-bottom: 15px;
  color: #333;
`;

// Styling for text
const Text = styled.p`
  font-size: 16px;
  margin: 5px 0;
  color: #555;
`;

// Styling for price and total amounts
const PriceText = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
  color: #333;
`;

// Styling for horizontal separator
const Separator = styled.hr`
  border: 0;
  height: 1px;
  background-color: #ddd;
  margin: 20px 0;
`;

const OrderSummary = ({ product, total,size }) => {
  return (
    <SummaryContainer>
      <Heading>Order Summary</Heading>
      <Text>{product.title}</Text>
      <Image src={product.images[0]} alt={product.title} />
      {/* <Text>Quantity: {product.quantity}</Text> */}
      <Text>Size: {size}</Text>
      <PriceText>Price: ₹{total}</PriceText>
      <Separator />
      <PriceText>Total: ₹{total}</PriceText>
    </SummaryContainer>
  );
};

export default OrderSummary;
