import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    margin-top: 50px;
    position: relative;
    overflow: hidden;
    ${mobile({
        display: "none"
    })}
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.directions === "left" && "10px"};
    right: ${props => props.directions === "right" && "10px"};
    cursor: pointer;
    margin: auto;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.1s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`;

const ImgContainer = styled.div`
    height: 100vh;
    flex: 1;
`;

const Image = styled.img`
    margin-left: 170px;
    margin-top: 95px;
    height: 70%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
`;

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex(prev => (prev < 2 ? prev + 1 : 0));
        }, 5000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    return (
        <Container>
            <Arrow directions="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            {/* <Link> */}
                          <Link to={`/product/${item.id}`}>
                                <Button>ORDER NOW</Button>
                            </Link>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow directions="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    );
};

export default Slider;
