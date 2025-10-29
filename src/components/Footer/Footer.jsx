// src/components/Footer/Footer.jsx
import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterContainer = styled.footer`
  background: #111;
  color: #fff;
  padding: 2rem 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    padding-bottom: 4rem; /* space for bottom navbar */
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;

  a {
    color: #ccc;
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.3s ease;

    &:hover {
      color: #ffd700;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  font-size: 1.4rem;

  a {
    color: #ccc;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #ffd700;
  }
`;

const CopyRight = styled.p`
  font-size: 0.85rem;
  color: #999;
  margin-top: 0.5rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/wallet">Wallet</a>
        <a href="/profile">Profile</a>
      </FooterLinks>

      <SocialIcons>
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaLinkedin /></a>
      </SocialIcons>

      <CopyRight>© {new Date().getFullYear()} Drishti. All Rights Reserved.</CopyRight>
    </FooterContainer>
  );
};

export default Footer;
