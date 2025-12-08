import React from "react";
import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string | React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "gradient";
}

const StyledButton = styled.button<{
  $disabled?: boolean;
  $variant?: string;
}>`
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease-in-out;

  ${({ $variant, $disabled }) => {
    if ($disabled) {
      return `
        background: #c9cdd3;
        color: #6b7280;
      `;
    }

    switch ($variant) {
      case "gradient":
        return `
          background: linear-gradient(90deg, #a78bfa, #e879f9, #f472b6);
          color: white;
          &:hover {
            opacity: 0.9;
          }
        `;
      case "secondary":
        return `
          background: transparent;
          border: 1px solid rgba(255,255,255,0.3);
          color: white;
          &:hover {
            background: rgba(255,255,255,0.1);
          }
        `;
      case "primary":
      default:
        return `
          background: #2563eb;
          color: white;
          &:hover {
            background: #1e40af;
          }
        `;
    }
  }}
`;

export const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  disabled = false,
  variant = "primary",
  children,
  ...rest
}) => {
  return (
    <StyledButton
      $disabled={disabled}
      $variant={variant}
      disabled={disabled}
      {...rest}
    >
      {/* If children exist, render children */}
      {children ? (
        children
      ) : (
        <>
          {/* Default label */}
          {label}
          {/* Optional icon */}
          {icon && <span>{icon}</span>}
        </>
      )}
    </StyledButton>
  );
};
