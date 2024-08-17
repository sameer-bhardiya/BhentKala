import { Facebook, Instagram, MailLockOutlined, Phone, Room, Twitter, WhatsApp } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from 'react-router-dom';

const Container = styled.div`
display:flex;
${mobile({
        flexDirection:"column"
    })}
`;
const Left = styled.div`
flex:1;
display:flex;
flex-direction: column;
padding:20px;
`;

// const Logo = styled.h1`

// `;
const Desc = styled.p`
  margin:20px 0px;
`;
const SocialContainer = styled.div`
  display:flex;
`;
const SocialIcon = styled.div`
  width:40px;
  height:40px;
  border-radius:50%;
  color:white;
  background-color:#${props=>props.color};
  display:flex;
  align-items:center;
  justify-content:center;
  margin-right:20px;
  cursor:pointer;
`;

const Center = styled.div`
flex:1;
padding:20px;
${mobile({
        display:"none"
    })}
`;
const Title = styled.h3`
  margin-bottom:30px;
`;
const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`;

const ListItem = styled.li`
width:50%;
margin-bottom:10px;
cursor:pointer;
&:hover {
    font-weight: bold;
  }
`;

const Right = styled.div`
flex:1;
padding:20px;
${mobile({
        backgroundColor:"lightgrey"
    })}
`;

const ContactItem = styled.div`
 margin-bottom:20px;
 display:flex;
 align-items:center;
`;

const Logo = styled.div`
display:flex;
  img {
    height: 60px;
    background:black;
    border-radius:5px;
    @media (max-width: 488px) {
      height: 30px; /* Adjust the height for mobile */
    }
  }
  h1{
    margin:10px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Left>
      <Logo>
            <img src="../../image/logo.png" alt="BhenKala Logo" />
      <h1> BhentKala </h1>
      </Logo>
      <Desc>
        There are many variation of passages of lorem available ,
        but the majority have syffered alteration form , by injected humour , or randomised word.
      </Desc>
      <SocialContainer>
  <a href="https://www.facebook.com/DigitaloilpaintingGift" target="_blank" rel="noopener noreferrer">
    <SocialIcon color="3B5999">
      <Facebook />
    </SocialIcon>
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <SocialIcon color="E4405F">
      <Instagram />
    </SocialIcon>
  </a>
  <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
    <SocialIcon color="55ACEE">
      <WhatsApp />
    </SocialIcon>
  </a>
</SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <Link to = "/" style={{ textDecoration: 'none',color:'black' }}>
             <ListItem >Home</ListItem>
            </Link>
          </ListItem>
          <ListItem>
            <Link to = "/cart" style={{ textDecoration: 'none',color:'black' }}>
             <ListItem >Cart</ListItem>
            </Link>
          </ListItem>
          <ListItem>Digital Art</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Photo Service</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Custom Gifts</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>

        </List>
      </Center>
      <Right>
        <Title>Contact</Title>

        <ContactItem> <Room style={{marginRight:"10px"}}/>Risali</ContactItem>
        <ContactItem><Phone style={{marginRight:"10px"}}/> 8319677***</ContactItem>
        <ContactItem>
          <MailLockOutlined style={{marginRight:"10px"}}/>BhentKala@gmail.com
        </ContactItem>
      </Right>
    </Container>
  )
}

export default Footer