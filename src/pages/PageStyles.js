import styled from "styled-components";

export const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a2a, #1c1c4d);
  color: white;
  padding: 80px 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding-bottom: 80px; /* for bottom navbar space */
  }
`;

export const PageTitle = styled.h1`
  font-size: 2.2rem;
  color: #ffd700;
  margin-bottom: 20px;
`;

export const PageDesc = styled.p`
  font-size: 1rem;
  color: #ddd;
  max-width: 600px;
  margin: 0 auto 40px;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 20px;
  max-width: 1000px;
  margin: auto;
`;

export const Card = styled.div`
  background: rgba(255,255,255,0.08);
  border-radius: 10px;
  padding: 20px;
  transition: 0.3s;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 0 10px #ffd70050;
  }
`;

