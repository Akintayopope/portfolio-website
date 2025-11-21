import React from 'react';
import styled from 'styled-components';
import type { CardProps } from './Card.types';

const Wrapper = styled.article<{ disabled?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 420px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  transition:
    transform 120ms ease,
    box-shadow 120ms ease;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

  &:hover {
    transform: ${({ disabled }) => (disabled ? 'none' : 'translateY(-2px)')};
    box-shadow: ${({ disabled }) =>
      disabled
        ? '0 6px 18px rgba(0,0,0,0.06)'
        : '0 10px 24px rgba(0,0,0,0.10)'};
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Body = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  margin: 0 0 4px 0;
  font-size: 1.25rem;
  line-height: 1.6rem;
`;

const Subtitle = styled.p`
  margin: 0 0 10px 0;
  color: #6b7280;
  font-size: 0.95rem;
`;

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  imageSrc,
  children,
  disabled = false,
  onClick,
}) => {
  return (
    <Wrapper
      disabled={disabled}
      data-disabled={disabled} // ✔ replaces aria-disabled
      onClick={() => {
        if (!disabled && onClick) onClick();
      }}
      role="article"
    >
      {imageSrc && <Img src={imageSrc} alt={title || 'Card image'} />}
      <Body>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </Body>
    </Wrapper>
  );
};
