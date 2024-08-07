import { KeyboardArrowDownOutlined, KeyboardArrowUpOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import { mobile } from "../responsive";
import { useSelector } from 'react-redux';
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

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  ${mobile({
    flex: 2, justifycontent: "center", marginRight: "10px"
  })};
`;

const MenuItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({
    fontSize: "15px", marginLeft: "10px"
  })};
  &:hover {
    font-weight: bold;
  }
`;

const DropdownMenu = styled.div`
  display: ${props => (props.open ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  z-index: 1;
  min-width: 160px;
  padding: 12px 16px;
  text-align: left;
`;

const DropdownItem = styled(Link)`
  color: black;
  padding: 8px 12px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  ${mobile({
    flex: 2, justifycontent: "center", marginRight: "10px"
  })};
`;

const Navbar1 = () => {
  const quantity = useSelector(state => state.cart.quantity);
  const user = useSelector(state => state.user.currentUser);
  const [openDropdown, setOpenDropdown] = useState(null);

  const LogOut = e => {
    window.localStorage.clear();
    window.location.href = '/';
  }

  const handleMouseEnter = (menu) => {
    setOpenDropdown(menu);
  }

  const handleMouseLeave = () => {
    setOpenDropdown(null);
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
          <MenuItem
            onMouseEnter={() => handleMouseEnter('digitalArt')}
            onMouseLeave={handleMouseLeave}
          >
            <span>Digital Art</span>
            {openDropdown === 'digitalArt' ? <KeyboardArrowUpOutlined /> : <KeyboardArrowDownOutlined />}
            <DropdownMenu open={openDropdown === 'digitalArt'}>
              <DropdownItem to="/">Digital Sketch</DropdownItem>
              <DropdownItem to="/">Digital Oil Painting</DropdownItem>
              <DropdownItem to="/">Wall Art Digital Painting</DropdownItem>
            </DropdownMenu>
          </MenuItem>
          <MenuItem
            onMouseEnter={() => handleMouseEnter('photoServices')}
            onMouseLeave={handleMouseLeave}
          >
            <span>Photo Services</span>
            {openDropdown === 'photoServices' ? <KeyboardArrowUpOutlined /> : <KeyboardArrowDownOutlined />}
            <DropdownMenu open={openDropdown === 'photoServices'}>
              <DropdownItem to="/">Image Manipulation</DropdownItem>
              <DropdownItem to="/">Damage Photo Restoration</DropdownItem>
              <DropdownItem to="/">B&W to Color Photo</DropdownItem>
              <DropdownItem to="/">Photo Collage</DropdownItem>
            </DropdownMenu>
          </MenuItem>
          <MenuItem
            onMouseEnter={() => handleMouseEnter('customGifts')}
            onMouseLeave={handleMouseLeave}
          >
            <span>Custom Gifts</span>
            {openDropdown === 'customGifts' ? <KeyboardArrowUpOutlined /> : <KeyboardArrowDownOutlined />}
            <DropdownMenu open={openDropdown === 'customGifts'}>
              <DropdownItem to="/">Video Invitation</DropdownItem>
              <DropdownItem to="/">Trendy Invitation Card</DropdownItem>
              <DropdownItem to="/">Caricature Art</DropdownItem>
              <DropdownItem to="/">Mosaic Art</DropdownItem>
            </DropdownMenu>
          </MenuItem>
        </Center>
        <Right>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <MenuItem>Home</MenuItem>
          </Link>
          {user ? null : <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
            <MenuItem>Login</MenuItem>
          </Link>}
          {user ? <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <MenuItem onClick={LogOut}>Log Out</MenuItem>
          </Link> : <Link to="/Register" style={{ textDecoration: 'none', color: 'black' }}>
            <MenuItem>Sign Up</MenuItem>
          </Link>}
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Containers>
  )
}

export default Navbar1