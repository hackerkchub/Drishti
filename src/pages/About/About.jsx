import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  padding: 100px 20px;
  text-align: center;
  min-height: 100vh;
  background: #faf9ff;
`;

const AboutPage = () => {
  return (
    <AboutContainer>
      <h1>About Drishti</h1>
      <p>
        Welcome to <strong>Drishti</strong> — your trusted online astrology and
        spiritual guidance platform. We connect you with verified experts,
        astrologers, and spiritual guides who can help you find answers,
        clarity, and direction.
      </p>
      <p>
        This is a dummy About page for development purposes. You can update it
        later with your real content, images, or sections.
      </p>
    </AboutContainer>
  );
};

export default AboutPage;
