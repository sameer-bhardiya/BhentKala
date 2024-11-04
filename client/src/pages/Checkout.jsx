import styled from "styled-components";
import Navbar1 from "../components/Navbar1";
import Announcement from "../components/Announcement";
import { useLocation } from "react-router-dom";
import ShippingAddress from "../components/Checkout/ShippingAddress";
import PaymentMethod from "../components/Checkout/PaymentMethod";
import OrderSummary from "../components/Checkout/OrderSummary";
import { useState } from "react";

const Container = styled.div``;

const Heading = styled.h1`
  margin: 10% 0 5% 0;
  text-align: center;
`;

const Wrapper = styled.div`
  text-align: center;
`;

const Tab = styled.div`
  margin: 10px auto;
  width: 80%;
  background-color: #f5f5f5;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TabHeading = styled.h2`
  margin: 0;
  font-size: 20px;
`;

const TabContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: teal;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #006666;
  }
`;

const Checkout = () => {
  const [activeTab, setActiveTab] = useState(0); // To control which tab is open (0 = Delivery Address, 1 = Order Summary, 2 = Payment Method)
  const [address, setAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const location = useLocation();
  const { product, quantity, size, price } = location.state;

  const handleAddressSave = (addressData) => {
    setAddress(addressData);
    setActiveTab(1); // Move to next tab when address is saved
  };

  const handlePaymentSave = (method) => {
    setPaymentMethod(method);
    setActiveTab(3); // Move to next tab after payment method is saved
  };

  return (
    <Container>
      <Announcement />
      <Navbar1 />
      <Wrapper>
        <Heading>Checkout Page</Heading>

        {/* Delivery Address Tab */}
        <Tab onClick={() => setActiveTab(0)}>
          <TabHeading>Delivery Address</TabHeading>
          <span>{activeTab === 0 ? '-' : '+'}</span>
        </Tab>
        <TabContent isOpen={activeTab === 0}>
          <ShippingAddress onSaveAddress={handleAddressSave} />
        </TabContent>

        {/* Order Summary Tab (always visible, opens after Delivery Address is submitted) */}
        <Tab onClick={() => setActiveTab(1)}>
          <TabHeading>Order Summary</TabHeading>
          <span>{activeTab === 1 ? '-' : '+'}</span>
        </Tab>
        <TabContent isOpen={activeTab === 1}>
          <OrderSummary product={product} total={price} size ={size} />

          <Button onClick={() => setActiveTab(2)}>Continue to Payment</Button>
        </TabContent>

        {/* Payment Method Tab (always visible, opens after Order Summary is submitted) */}
        <Tab onClick={() => setActiveTab(2)}>
          <TabHeading>Payment Method</TabHeading>
          <span>{activeTab === 2 ? '-' : '+'}</span>
        </Tab>
        <TabContent isOpen={activeTab === 2}>
          <PaymentMethod onSavePaymentMethod={handlePaymentSave} />
        </TabContent>
      </Wrapper>
    </Container>
  );
};

export default Checkout;
