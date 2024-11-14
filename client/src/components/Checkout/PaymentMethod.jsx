import React, { useState } from 'react';
import styled from 'styled-components';

// Container for the payment method
const PaymentContainer = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  width: 350px;
  margin: 0 auto;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

// Styled label for radio buttons
const Label = styled.label`
  display: block;
  margin: 10px 0;
  font-size: 16px;
  color: #555;
  cursor: pointer;
`;

// Styled radio input buttons
const RadioInput = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

// Styled button for submitting the payment method
const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: teal;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #006666;
  }
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 22px;
  margin-bottom: 15px;
  color: #333;
`;

const PaymentMethod = ({ onSavePaymentMethod }) => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = () => {
    onSavePaymentMethod(paymentMethod);
  };

  return (
    <PaymentContainer>
      <Heading>Payment Method</Heading>
      <Label>
        <RadioInput
          type="radio"
          value="creditCard"
          checked={paymentMethod === 'creditCard'}
          onChange={handlePaymentChange}
        />
        Credit Card
      </Label>
      <Label>
        <RadioInput
          type="radio"
          value="netBanking"
          checked={paymentMethod === 'netBanking'}
          onChange={handlePaymentChange}
        />
        Net Banking
      </Label>
      {/* Add more payment options if necessary */}
      <Button onClick={handleSubmit}>Proceed with Payment</Button>
    </PaymentContainer>
  );
};

export default PaymentMethod;
