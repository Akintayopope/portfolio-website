import React from 'react';
import styled from 'styled-components';

interface HeroProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  backgroundImage?: string;
  disabled?: boolean;
}

const HeroWrapper = styled.div<{ $disabled?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 140px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: radial-gradient(
    circle at top left,
    #e0f2fe,
    #e0e7ff 40%,
    #f8fafc 90%
  );
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
  transition: opacity 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    background: rgba(59, 130, 246, 0.25);
    border-radius: 50%;
    filter: blur(150px);
    top: -120px;
    left: -120px;
    animation: float 6s infinite alternate ease-in-out;
  }

  &::after {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    background: rgba(139, 92, 246, 0.25);
    border-radius: 50%;
    filter: blur(160px);
    bottom: -130px;
    right: -130px;
    animation: float 7s infinite alternate-reverse ease-in-out;
  }

  @keyframes float {
    0% {
      transform: translate(0px, 0px);
    }
    100% {
      transform: translate(30px, -20px);
    }
  }

  @media (max-width: 768px) {
    padding: 100px 20px;
  }
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 10px;
  z-index: 1;
`;

const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #475569;
  z-index: 1;
`;

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  disabled = false,
}) => {
  return (
    <HeroWrapper role="region" $disabled={disabled}>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </HeroWrapper>
  );
};
