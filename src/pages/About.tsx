import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  margin: 0 auto;
  padding: 20px;
`;

const AboutTitle = styled.h1`
  color: var(--primary-color);
  margin-bottom: 20px;
`;

const AboutContent = styled.p`
  font-size: 18px;
  line-height: 1.6;
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <AboutTitle>About Pursuit Build</AboutTitle>
      <AboutContent>
        Pursuit Build creates software to empower work force development organizations push their mission forward with AI enabled solutions.
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
