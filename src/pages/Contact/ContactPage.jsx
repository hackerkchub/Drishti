import React from "react";
import styled from "styled-components";
import { FaPhoneAlt, FaComments, FaHeadset } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const ContactContainer = styled.div`
  padding: 120px 20px;
  text-align: center;
`;

const Section = styled.div`
  background: #f8f9ff;
  border-radius: 16px;
  padding: 30px;
  margin: 20px auto;
  max-width: 700px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const Icon = styled.div`
  font-size: 40px;
  color: #4b6cff;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background: #4b6cff;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
  font-weight: 600;
  font-size: 1rem;
  transition: background 0.3s;
  &:hover {
    background: #324ed6;
  }
`;

const ContactPage = () => {
  const navigate = useNavigate(); // ✅ React Router hook for navigation

  const handleStartChat = () => {
    navigate("/chat"); // ✅ Redirect to Chat page
  };

  return (
    <ContactContainer>
      <h1>Contact & Support</h1>

      <Section>
        <Icon><FaPhoneAlt /></Icon>
        <h3>Call Us</h3>
        <p>Speak directly with our experts for instant help.</p>
        <Button>Start Call</Button>
      </Section>

      <Section>
        <Icon><FaComments /></Icon>
        <h3>Live Chat</h3>
        <p>Chat with a support agent in real time.</p>
        <Button onClick={handleStartChat}>Start Chat</Button> {/* ✅ Redirects to chat */}
      </Section>

      <Section>
        <Icon><FaHeadset /></Icon>
        <h3>Support Ticket</h3>
        <p>Submit your issue and we’ll reach out shortly.</p>
        <Button>Submit Ticket</Button>
      </Section>
    </ContactContainer>
  );
};

export default ContactPage;
