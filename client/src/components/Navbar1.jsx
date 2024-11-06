import { KeyboardArrowDownOutlined, KeyboardArrowUpOutlined, ShoppingCartOutlined,Search,Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import { mobile } from "../responsive";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Containers = styled.div`
  height: 80px;
  position: fixed;
  top: 25px;
  width: 100%;
  background-color: white;
  z-index: 1000;
  ${mobile({
    height: "50px"
  })};
   @media (max-width: 488px) {
    position:absolute;
    height: 60px;
    top: 90;
  }
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items:center;
  justify-content:space-between;
  @media (max-width: 488px) {
    padding: 10px 0;
    top:99px;
    border-bottom:1px solid black;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items:center;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding: 5px 13px ;
    border-radius:50px;
    @media (max-width: 488px) {
    display: none; /* Hide the menu items on mobile */
  }
  `;

const Input = styled.input`
border: none;
/* padding-left:50px; */
outline: none;
${mobile({
  width:"50px;"
  })};
`;
const Logo = styled.div`
  img {
    height: 60px;
    background:black;
    border-radius:5px;
    @media (max-width: 488px) {
      /* display: none; */
      height: 50px;
      margin-left:10px;
    }
  }
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 488px) {
    /* flex: 2; justify-content: "center"; margin-right: "10px" */

    display: none; /* Hide the menu items on mobile */
  };
`;

const MenuItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
  @media (max-width: 488px) {
    font-Size: "15px"; margin-left: "10px";
  };
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
  /* @media (max-width: 488px) {
    flex: 2; justify-content:"center"; margin-right: "10px";
  }; */
  @media (max-width: 488px) {
    display: none; /* Hide the menu items on mobile */
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  margin-right: 10px;

  svg{
    font-size: 36px;
  }
  @media (max-width: 488px) {
    display: block;
    cursor: pointer;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 1000;
  display: ${(props) => (props.open ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 489px) {
    display: none;
  }
`;

const MobileMenuItem = styled.div`
  margin: 10px 0;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
    color: #bf4625;
  }
`;

const Navbar1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Containers>
      <Wrapper>
        <Left>
        <Link to="/">
          <Logo>
            <img src="/image/logo.png" alt="BhenKala Logo" />
          </Logo>
        </Link>
           <SearchContainer>
            <Input placeholder='search here anything' />
            <Search />
          </SearchContainer>
        </Left>
        <Center>
          <MenuItem
            onMouseEnter={() => handleMouseEnter('digitalArt')}
            onMouseLeave={handleMouseLeave}
          >
            <span>Digital Art</span>
            {openDropdown === 'digitalArt' ? <KeyboardArrowUpOutlined /> : <KeyboardArrowDownOutlined />}
            <DropdownMenu open={openDropdown === 'digitalArt'}>
              <DropdownItem to="/product/17654678">Digital Oil Painting</DropdownItem>
              <DropdownItem to="/product/4876567">Digital Sketch</DropdownItem>
              <DropdownItem to="/product/68765678">Wall Art Digital Painting</DropdownItem>
            </DropdownMenu>
          </MenuItem>
          <MenuItem
            onMouseEnter={() => handleMouseEnter('photoServices')}
            onMouseLeave={handleMouseLeave}
          >
            <span>Photo Services</span>
            {openDropdown === 'photoServices' ? <KeyboardArrowUpOutlined /> : <KeyboardArrowDownOutlined />}
            <DropdownMenu open={openDropdown === 'photoServices'}>
              <DropdownItem to="/product/5655567">Damage Photo Restoration</DropdownItem>
              <DropdownItem to="/product/27655678">Photo Collage</DropdownItem>
            </DropdownMenu>
          </MenuItem>
          <MenuItem
            onMouseEnter={() => handleMouseEnter('customGifts')}
            onMouseLeave={handleMouseLeave}
          >
            <span>Custom Gifts</span>
            {openDropdown === 'customGifts' ? <KeyboardArrowUpOutlined /> : <KeyboardArrowDownOutlined />}
            <DropdownMenu open={openDropdown === 'customGifts'}>
              <DropdownItem to="/product/387656">Video Invitation</DropdownItem>
              <DropdownItem to="/product/27655678">Trendy Invitation Card</DropdownItem>
              {/* <DropdownItem to="/">Caricature Art</DropdownItem> */}
              {/* <DropdownItem to="/">Mosaic Art</DropdownItem> */}
            </DropdownMenu>
          </MenuItem>
        </Center>
        <Right>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <MenuItem>Home</MenuItem>
          </Link>
          <Link to="/gallery" style={{ textDecoration: 'none', color: 'black' }}>
            <MenuItem>Gallery</MenuItem>
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
        <HamburgerMenu onClick={toggleMenu}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </HamburgerMenu>
      </Wrapper>

      {/* Mobile Dropdown Menu */}
      <MobileMenu open={menuOpen}>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <MobileMenuItem onClick={toggleMenu}>Menu</MobileMenuItem>
        </Link>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <MobileMenuItem onClick={toggleMenu}>Digital Oil Painting</MobileMenuItem>
        </Link>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <MobileMenuItem onClick={toggleMenu}>Wall Art Digital Painting</MobileMenuItem>
        </Link>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <MobileMenuItem onClick={toggleMenu}>Damage Photo Restoration</MobileMenuItem>
        </Link>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <MobileMenuItem onClick={toggleMenu}>Trendy Invitation Card</MobileMenuItem>
        </Link>
        <Link to="/gallery" style={{ textDecoration: 'none', color: 'black' }}>
          <MobileMenuItem onClick={toggleMenu}>Gallery</MobileMenuItem>
        </Link>
        {/* <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <MobileMenuItem onClick={toggleMenu}>गैलरी</MobileMenuItem>
        </Link> */}
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <MobileMenuItem onClick={toggleMenu}>Log in</MobileMenuItem>
        </Link>
        {/* <Link to="/register" style={{ textDecoration: 'none', color: 'black' }}>
          <MobileMenuItem onClick={toggleMenu}>रजिस्टर करे</MobileMenuItem>
        </Link> */}
      </MobileMenu>
    </Containers>
  )
}

export default Navbar1
