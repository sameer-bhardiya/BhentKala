import styled from "styled-components";
import Navbar1 from "../components/Navbar1";
import Announcement from "../components/Announcement";
import { useLocation } from "react-router-dom";
import ShippingAddress from "../components/Checkout/ShippingAddress";
import PaymentMethod from "../components/Checkout/PaymentMethod";
import OrderSummary from "../components/Checkout/OrderSummary";
import { useState } from "react";
import UploadPicture from "../components/Checkout/UploadPicture";

const Container = styled.div``;

const Heading = styled.h1`
  margin: 8% 0 3% 0;
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
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
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
  const [activeTab, setActiveTab] = useState(0); // To control which tab is open (0 = Delivery Address, 1 = Order Summary, 2 = Payment Method, 3 = Upload Picture)
  const [address, setAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [uploadedPicture, setUploadedPicture] = useState(null);

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

  const handlePictureUpload = (file) => {
    setUploadedPicture(file);
    setActiveTab(3); // Directly move to the Payment Method tab after picture upload
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
          <span>{activeTab === 0 ? "-" : "+"}</span>
        </Tab>
        <TabContent isOpen={activeTab === 0}>
          <ShippingAddress onSaveAddress={handleAddressSave} />
        </TabContent>

        {/* Order Summary Tab */}
        <Tab onClick={() => setActiveTab(1)}>
          <TabHeading>Order Summary</TabHeading>
          <span>{activeTab === 1 ? "-" : "+"}</span>
        </Tab>
        <TabContent isOpen={activeTab === 1}>
          <OrderSummary product={product} total={price} size={size} />
          <Button onClick={() => setActiveTab(2)}>Upload your photo</Button>
        </TabContent>

        {/* Upload Picture Tab */}
        <Tab onClick={() => setActiveTab(2)}>
          <TabHeading>Upload Your Picture</TabHeading>
          <span>{activeTab === 2 ? "-" : "+"}</span>
        </Tab>
        <TabContent isOpen={activeTab === 2}>
          <UploadPicture onUpload={handlePictureUpload} />
          {uploadedPicture && <p>Uploaded File: {uploadedPicture.name}</p>}
        </TabContent>

        {/* Payment Method Tab */}
        <Tab onClick={() => setActiveTab(3)}>
          <TabHeading>Payment Method</TabHeading>
          <span>{activeTab === 3 ? "-" : "+"}</span>
        </Tab>
        <TabContent isOpen={activeTab === 3}>
          <PaymentMethod onSavePaymentMethod={handlePaymentSave} />
        </TabContent>
      </Wrapper>
    </Container>
  );
};

export default Checkout;
