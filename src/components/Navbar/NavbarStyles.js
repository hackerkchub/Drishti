// src/components/Navbar/NavbarStyles.js
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  background: linear-gradient(135deg, #0a0a2a, #1c1c4d);
  color: #fff;
  width: 100%;
  z-index: 1000;
  box-shadow: 0px 2px 6px rgba(0,0,0,0.3);
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 30px;
  max-width: 1200px;
  margin: auto;
`;

export const Logo = styled(NavLink)`
  font-size: 1.8rem;
  font-weight: bold;
  color: #ffd700;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    color: #ffcc00;
  }
`;

export const MenuLinks = styled.div`
  display: flex;
  gap: 25px;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 65px;
    right: 0;
    background: #1c1c4d;
    padding: 15px 25px;
    border-radius: 0 0 10px 10px;
    width: 180px;
    z-index: 999;
  }
`;

export const MenuLink = styled(NavLink)`
  color: #fff;
  font-weight: 500;
  text-decoration: none;
  transition: 0.3s;
  position: relative;
  
  &.active {
    color: #ffd700;
  }

  &.active::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #ffd700;
    border-radius: 5px;
  }

  &:hover {
    color: #ffd700;
  }
`;

export const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: #ffd700;
  }
`;

export const MobileToggle = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #fff;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    background: #0a0a2a;
    color: white;
    padding: 10px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
    box-shadow: 0px -2px 6px rgba(0,0,0,0.4);
  }
`;

export const MobileLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
  color: #fff;
  text-decoration: none;
  transition: 0.3s;

  svg {
    font-size: 1.3rem;
    margin-bottom: 3px;
  }

  &.active {
    color: #ffd700;
    transform: scale(1.05);
  }

  &:hover {
    color: #ffd700;
  }
`;
