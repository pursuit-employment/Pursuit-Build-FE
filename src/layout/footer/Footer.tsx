import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--primary-color);
  color: white;
  padding: 40px 20px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
`;

interface FooterColumnProps {
  width: string;
}

const FooterColumn = styled.div<FooterColumnProps>`
  flex: ${props => props.width};
  margin-bottom: 20px;

  @media (max-width: 440px) {
    flex: 1 1 100%;
  }
`;

const FooterTitle = styled.h3`
  margin-bottom: 15px;
`;

const FooterLink = styled.a`
  display: block;
  margin-bottom: 10px;
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn width="45%">
          <FooterTitle>About Us</FooterTitle>
          <p>Pursuit Build creates software to empower workforce development organizations push their mission forward with AI-enabled solutions.</p>
        </FooterColumn>
        <FooterColumn width="25%">
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/about">About</FooterLink>
          <FooterLink href="/projects">Projects</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
        </FooterColumn>
        <FooterColumn width="25%">
          <FooterTitle>Contact</FooterTitle>
          <p>123 Main St, City, State 12345</p>
          <p>Email: info@pursuitlabs.com</p>
          <p>Phone: (123) 456-7890</p>
        </FooterColumn>
      </FooterContent>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        &copy; {new Date().getFullYear()} Pursuit. All rights reserved.
      </div>
    </FooterContainer>
  );
};

export default Footer;
