import React from "react";
import {
  Nav,
  NavContainer,
  LogoWrapper,
  LogoImage,
  LogoText,
  MenuLinks,
  MenuLink,
  IconGroup,
  IconButton,
  MobileMenu,
  MobileLink,
} from "./NavbarStyles";

import {
  FaWallet,
  FaSearch,
  FaLanguage,
  FaHome,
  FaUserPlus,
  FaHeadset,
  FaInfoCircle,
} from "react-icons/fa";

import logo from "../../assets/drishti-logo.png";
const Navbar = () => {
  return (
    <>
      {/* 🔹 Top Navbar */}
      <Nav>
        <NavContainer>
          {/* 🔸 Logo section */}
          <LogoWrapper to="/">
            <LogoImage src={logo} alt="Drishti Logo" />
            <LogoText>Drishti</LogoText>
          </LogoWrapper>

          {/* 🔸 Main menu */}
          <MenuLinks>
            <MenuLink to="/">Home</MenuLink>
            <MenuLink to="/about">About</MenuLink>
            <MenuLink to="/wallet">Wallet</MenuLink>
            <MenuLink to="/profile">Profile</MenuLink>
            <MenuLink to="/auth">Sign In </MenuLink>
            <MenuLink to="/contact">Contact</MenuLink>
          </MenuLinks>

          {/* 🔸 Icon section */}
          <IconGroup>
            <IconButton><FaWallet /></IconButton>
            <IconButton><FaSearch /></IconButton>
            <IconButton><FaLanguage /></IconButton>
          </IconGroup>
        </NavContainer>
      </Nav>

      {/* 🔹 Bottom Mobile Menu */}
      <MobileMenu>
        <MobileLink to="/">
          <FaHome />
          <span>Home</span>
        </MobileLink>
        <MobileLink to="/about">
          <FaInfoCircle />
          <span>About</span>
        </MobileLink>
        <MobileLink to="/wallet">
          <FaWallet />
          <span>Wallet</span>
        </MobileLink>
        <MobileLink to="/auth">
          <FaUserPlus />
          <span>Sign-In</span>
        </MobileLink>
        <MobileLink to="/contact">
          <FaHeadset />
          <span>Contact</span>
        </MobileLink>
      </MobileMenu>
    </>
  );
};

export default Navbar;
