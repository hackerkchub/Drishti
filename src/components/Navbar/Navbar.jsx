import React from "react";
import {
  Nav,
  NavContainer,
  Logo,
  MenuLinks,
  MenuLink,
  IconGroup,
  IconButton,
  MobileMenu,
  MobileLink,
} from "./NavbarStyles";
import { FaWallet, FaSearch, FaLanguage, FaHome, FaPhoneAlt, FaComments, FaUserPlus, FaHeadset, FaInfoCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      {/* 🔹 Top Navbar */}
      <Nav>
        <NavContainer>
          <Logo to="/">Drishti</Logo>

          <MenuLinks>
            <MenuLink to="/">Home</MenuLink>
            <MenuLink to="/about">About</MenuLink>
            <MenuLink to="/wallet">Wallet</MenuLink>
            <MenuLink to="/profile">Profile</MenuLink>
            <MenuLink to="/auth">Sign In / Up</MenuLink>
            <MenuLink to="/contact">Contact</MenuLink>
          </MenuLinks>

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
          <span>Auth</span>
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
