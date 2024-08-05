import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Containers = styled.div`
    height: 60px;
    position: fixed;
  top: 30px;
  width: 100%;
  background-color: white;
  z-index: 1000;
  ${mobile({
    height: "50px"
  })};
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items:center;
    justify-content:space-between;
    ${mobile({
      padding:"10px 0px"
    })};
 `;
const Left = styled.div`
 flex: 1;
 display: flex;
 align-items:center;

 `;
const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({
      display:"none"
    })};
`;
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display:flex;
    align-items:center;
    /* margin-left: 25px; */
    padding: 5px 13px ;
    border-radius:50px;
`;
const Input = styled.input`
  border: none;
  padding-left:50px;
  outline: none;


  ${mobile({
      width:"50px;"
    })};
`;

const Center = styled.div`
 /* flex: 1; */
 display: flex;
 text-align:center;

 `;
const Logo = styled.div`
img {
  height: 40px;
  background:black;
  border-radius:5px;
  @media (max-width: 428px) {
    height: 30px; /* Adjust the height for mobile */
  }
}
`;
const Right = styled.div`
 flex: 1;
 display:flex;
 justify-content: flex-end;
 ${mobile({
      flex:2, justifycontent:"center", marginRight:"10px"
    })};
 `;

const MenuItem = styled.div`
  font-size: 14;
  cursor:pointer;
  margin-left:25px;


  ${mobile({
      fontSize:"15px", marginLeft:"10px"
    })};
 `;

const Navbar1 = () => {
  const quantity = useSelector(state=>state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);

  const LogOut = (e) => {
    window.localStorage.clear();
    window.location.href = "/";
  }

  return (
    <Containers>
      <Wrapper>
        <Left>
        <Logo>
            <img src="./image/logo.png" alt="Online4u Logo" />
          </Logo>

        </Left>
        <Center>
        {/* <Language>
            En
          </Language> */}
          <SearchContainer>
            <Input placeholder='search here anything' />
            <Search />
          </SearchContainer>
        </Center>
        <Right>
          <Link to = "/" style={{ textDecoration: 'none',color:'black' }}>
          <MenuItem>Home</MenuItem>
          </Link>

          <Link to = "/" style={{ textDecoration: 'none',color:'black' }}>
          <MenuItem>Our Services</MenuItem>
          </Link>

          {user ? null : <Link to = "/login" style={{ textDecoration: 'none',color:'black' }}>
          <MenuItem>Login</MenuItem>
          </Link>}

          {user ? <Link to ="/" style={{ textDecoration: 'none',color:'black' }}>
          <MenuItem onClick={LogOut}>Log Out</MenuItem>
          </Link> : <Link to ="/Register" style={{ textDecoration: 'none',color:'black' }}>
          <MenuItem>Sign Up</MenuItem>
          </Link>}

          <Link to= "/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined/>
            </Badge>
          </MenuItem>
          </Link>

        </Right>
      </Wrapper>
    </Containers>
  )
}

export default Navbar1