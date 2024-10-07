import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const HeroSection = styled.section`
  position: relative;
  text-align: center;
  margin-bottom: 40px;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const HeroText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const CTAButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3535c0;
  }
`;

const ColumnsSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const Column = styled.div`
  flex: 1;
  margin: 0 15px;
`;

const ColumnTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: var(--primary-color);
  text-align: center;
`;

const ColumnImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const ColumnText = styled.p`
  font-size: 1rem;
`;

const BottomCTA = styled.div`
  background-color: var(--primary-color);
  color: white;
  text-align: center;
  padding: 40px 20px;
`;

const BottomCTAText = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroImage src="/pursuit_hero_copy.jpg" alt="Hero Image" />
        <HeroContent>
          <HeroTitle>Welcome to Pursuit Build!</HeroTitle>
          <HeroText>Have a great idea for a Pursuit app or tool? Share it with us and we'll help you build it!</HeroText>
          <CTAButton as="a" href="/projects/new">Start Project</CTAButton>
        </HeroContent>
      </HeroSection>

      <ColumnsSection>
        <Column>
            <ColumnTitle>Your Ideas</ColumnTitle>
            <ColumnImage src="/pursuit_1.webp" alt="Column 1" />
            <ColumnText>
                Pursuit Build is a platform for you to share your ideas for new Pursuit tools and apps. Fellows and staff will review your ideas and build them for you.
            </ColumnText>
        </Column>
        <Column>
            <ColumnTitle>Our Process</ColumnTitle>
            <ColumnImage src="/pursuit_2.webp" alt="Column 1" />
            <ColumnText>
                After you submit your idea, it will be reviewed by a team of Fellows and staff. If it's selected, you will be a stakeholder in the project and will receive updates during development.
            </ColumnText>
        </Column>
        <Column>
            <ColumnTitle>One Big Team</ColumnTitle>
            <ColumnImage src="/pursuit_3.webp" alt="Column 1" />
            <ColumnText>
                Pursuit Build is a community effort. We're all about collaboration and learning. We'll help you build your idea and you'll help us improve our process.
          </ColumnText>
        </Column>
      </ColumnsSection>

      <BottomCTA>
        <BottomCTAText>Start your project now!</BottomCTAText>
        <CTAButton as="a" href="/projects/new">Share Project Idea</CTAButton>
    </BottomCTA>
    </HomeContainer>
  );
};

export default Home;
