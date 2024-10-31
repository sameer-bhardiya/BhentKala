import { Add, Remove } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar1 from "../components/Navbar1";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { products } from "../data";
import { Help } from "../components/Help";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  margin-top: 6%;
`;
const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column; // Change to column layout to place dots below
`;
const Image = styled.img`
  width: 60%;
  height: 70vh;
  object-fit: cover;
  border-radius: 10px;
  transition: opacity 0.5s ease-in-out;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  ${(props) => (props.direction === "left" ? "left: 110px" : "right: 110px")};
  cursor: pointer;
  color: white;
  z-index: 2;
`;

// Dots container and dot styling
const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;
const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "teal" : "lightgray")};
  margin: 0 5px;
  cursor: pointer;
`;

const InfoContainer = styled.div`
  flex: 1;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 600;
  font-size: 20px;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin-bottom: 20px;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  margin-right: 10px;
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dispatch = useDispatch();

  const product = products.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
const handleSizeChange = (size) => {
  const newSize = product.sizes.find((s) => s.size === size);
  setSelectedSize(newSize);
};

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({
      ...product,
      quantity,
      size: selectedSize.size,
      price: selectedSize.price,
    }));
  };

  const handleImageChange = (direction) => {
    if (direction === "left") {
      setCurrentImageIndex((currentImageIndex - 1 + product.images.length) % product.images.length);
    } else {
      setCurrentImageIndex((currentImageIndex + 1) % product.images.length);
    }
  };

  return (
    <Container>
      <Announcement />
      <Navbar1 />
      <Wrapper>
        <ImageContainer>
          <Arrow direction="left" onClick={() => handleImageChange("left")}>
            &#10094;
          </Arrow>
          <Image src={product.images[currentImageIndex]} alt={product.title} />
          <Arrow direction="right" onClick={() => handleImageChange("right")}>
            &#10095;
          </Arrow>
          {/* Dots for each image below the image */}
          <DotsContainer>
            {product.images.map((_, index) => (
              <Dot
                key={index}
                active={index === currentImageIndex}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </DotsContainer>
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          {/* <Price>₹ {product.price}</Price> */}
          <Price>₹ {selectedSize.price}</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Select Frame Size</FilterTitle>
              {/* <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize> */}
              <FilterSize onChange={(e) => handleSizeChange(e.target.value)}>
                 {product.sizes.map((s) => (
                <FilterSizeOption key={s.size} value={s.size}>
                  {s.size}
                </FilterSizeOption>
                 ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            {/* <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer> */}
            <Button onClick={handleClick}>ADD TO CART</Button>
            <Button>Order Now</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Help />
      <Footer />
    </Container>
  );
};

export default Product;
