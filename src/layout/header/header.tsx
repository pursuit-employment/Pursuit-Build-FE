import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const HeaderParent = styled.header`
  background-color: var(--primary-color);
  position: relative;
`;  

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  height: 60px;
  padding: 10px 15px;
  background-color: var(--primary-color);
  color: white;
`;

const Logo = styled.div`
  font-weight: bold;
  color: white;
  font-size: 2em; // This makes the text 2x as big
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 640px) {
    display: none;
  }
`;

const NavItem = styled.a`
  text-decoration: none;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;

  &:hover, &:focus {
    background-color: gray;
    color: white;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  width: 44px;
  height: 44px;
  padding: 10px;
  color: white;
  font-size: 24px;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  @media (max-width: 640px) {
    display: flex;
  }
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 60px;
  right: 0;
  background-color: var(--primary-color);
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 999;

  @media (min-width: 641px) {
    display: none;
  }
`;

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <HeaderParent>
        <HeaderContainer>
        <Logo as="a" href="/">Pursuit Build</Logo>
        <NavMenu>
            <NavItem href="/projects/new">Start New Project</NavItem>
            <NavItem href="/projects">Current Projects</NavItem>
            <NavItem href="/about">About</NavItem>
            {!isAuthenticated && (
              <NavItem href="/create-account">Create Account</NavItem>
            )}
            {isAuthenticated ? (
              <NavItem href="#" onClick={handleLogout}>Log Out</NavItem>
            ) : (
              <NavItem href="/login">Log In</NavItem>
            )}
        </NavMenu>
        <HamburgerIcon onClick={toggleMobileMenu}>☰</HamburgerIcon>
        <MobileMenu isOpen={mobileMenuOpen}>
            <NavItem href="/projects/new">Start New Project</NavItem>
            <NavItem href="/projects">Current Projects</NavItem>
            <NavItem href="/about">About</NavItem>
            {!isAuthenticated && (
              <NavItem href="/create-account">Create Account</NavItem>
            )}
            {isAuthenticated ? (
              <NavItem href="#" onClick={handleLogout}>Log Out</NavItem>
            ) : (
              <NavItem href="/login">Log In</NavItem>
            )}
        </MobileMenu>
        </HeaderContainer>
    </HeaderParent>
  );
};

export default Header;
