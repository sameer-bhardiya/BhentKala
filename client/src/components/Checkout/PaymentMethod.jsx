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
    if (paymentMethod === 'razorpay') {
      initiateRazorpayPayment();
    } else {
      onSavePaymentMethod(paymentMethod); // Save other payment methods like credit card, net banking, etc.
    }
  };

  // Razorpay payment initiation function
  const initiateRazorpayPayment = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/razers/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: 1000 }), // Amount in paise (for Rs.10.00)
      });
      const orderData = await response.json();

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Add your Razorpay key here
        amount: orderData.amount,
        currency: "INR",
        name: "Your Company Name",
        description: "Order Payment",
        order_id: orderData.id,
        handler: function (response) {
          onSavePaymentMethod('razorpay', response);
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error initiating Razorpay payment:", error);
    }
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
      <Label>
        <RadioInput
          type="radio"
          value="razorpay"
          checked={paymentMethod === 'razorpay'}
          onChange={handlePaymentChange}
        />
        Razorpay
      </Label>
      {/* Add more payment options if necessary */}
      <Button onClick={handleSubmit}>Proceed with Payment</Button>
    </PaymentContainer>
  );
};

export default PaymentMethod;
