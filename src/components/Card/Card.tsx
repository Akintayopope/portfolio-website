import React from "react";
import styled from "styled-components";
import type { CardProps } from "./Card.types";

const Wrapper = styled.article<{
  disabled?: boolean;
  variant?: string;
}>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 100%;
  border-radius: 18px;
  overflow: hidden;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: 0.25s ease;

  /* DEFAULT — white card (old behavior) */
  background: ${({ variant }) =>
    variant === "glass" ? "rgba(255, 255, 255, 0.06)" : "#ffffff"};

  border: ${({ variant }) =>
    variant === "glass"
      ? "1px solid rgba(255, 255, 255, 0.12)"
      : "1px solid #e5e7eb"};

  backdrop-filter: ${({ variant }) =>
    variant === "glass" ? "blur(25px)" : "none"};

  box-shadow: ${({ variant }) =>
    variant === "glass"
      ? "0 20px 50px rgba(0,0,0,0.35)"
      : "0 6px 18px rgba(0,0,0,0.06)"};

  &:hover {
    transform: ${({ disabled, variant }) =>
      disabled
        ? "none"
        : variant === "glass"
        ? "translateY(-4px)"
        : "translateY(-2px)"};
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Body = styled.div`
  padding: 20px 24px;
`;

const Title = styled.h3`
  margin-bottom: 4px;
  font-size: 1.25rem;
  line-height: 1.6rem;
`;

const Subtitle = styled.p`
  margin-bottom: 10px;
  color: #6b7280;
  font-size: 0.95rem;
`;

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  imageSrc,
  children,
  disabled = false,
  variant = "default",
  className,
  onClick,
}) => {
  return (
    <Wrapper
      variant={variant}
      disabled={disabled}
      className={className}
      onClick={() => {
        if (!disabled && onClick) onClick();
      }}
      role="article"
    >
      {imageSrc && <Img src={imageSrc} alt={title || "Card image"} />}
      <Body>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </Body>
    </Wrapper>
  );
};
