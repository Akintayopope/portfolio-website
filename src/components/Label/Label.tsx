import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.span<{
  disabled?: boolean;
  $variant?: string;
}>`
  font-size: 0.95rem;
  font-weight: 500;
  border-radius: 8px;
  padding: 0.4rem 0.75rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

  ${({ $variant }) => {
    switch ($variant) {
      case "soft":
        return `
          background: rgba(255,255,255,0.08);
          color: white;
        `;
      case "outlined":
        return `
          background: transparent;
          border: 1px solid rgba(255,255,255,0.3);
          color: white;
        `;
      default:
        return `
          background: rgba(255,255,255,0.03);
          color: white;
        `;
    }
  }}
`;

export const Label: React.FC<LabelProps> = ({
  text,
  children,
  disabled = false,
  variant = "default",
  className,
}) => {
  return (
    <StyledLabel disabled={disabled} $variant={variant} className={className}>
      {text || children}
    </StyledLabel>
  );
};
