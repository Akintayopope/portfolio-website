import React from "react";
import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string | React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;

  // Existing + new
  variant?: "primary" | "secondary" | "gradient" | "circle";
  size?: "sm" | "md" | "lg";

  // Anchor support
  href?: string;
  download?: string;
  target?: string;
  rel?: string;
}

const StyledButton = styled.a<{
  $disabled?: boolean;
  $variant?: string;
  $size?: string;
}>`
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;

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
          &:hover { opacity: 0.9; }
        `;

      case "secondary":
        return `
          background: transparent;
          border: 1px solid rgba(255,255,255,0.3);
          color: white;
          &:hover { background: rgba(255,255,255,0.1); }
        `;

      /* -------------------------------
         NEW CIRCLE VARIANT FOR ICON BUTTONS
      -------------------------------- */
      case "circle":
        return `
          width: 52px;
          height: 52px;
          padding: 0;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;

          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(10px);
          color: white;

          svg {
            width: 22px;
            height: 22px;
          }

          &:hover {
            background: rgba(255,255,255,0.16);
            border-color: rgba(255,255,255,0.3);
            transform: translateY(-3px);
          }
        `;

      // DEFAULT PRIMARY BUTTON
      case "primary":
      default:
        return `
          background: #2563eb;
          color: white;
          &:hover { background: #1e40af; }
        `;
    }
  }}

  /* -------------------------------
     SIZE SUPPORT (optional override)
  -------------------------------- */
  ${({ $size }) =>
    $size === "lg" &&
    `
      width: 52px;
      height: 52px;
      padding: 0;
    `}

  ${({ $size }) =>
    $size === "sm" &&
    `
      padding: 6px 12px;
      font-size: 0.85rem;
    `}
`;

export const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  disabled = false,
  variant = "primary",
  size = "md",
  href,
  download,
  target,
  rel,
  children,
  ...rest
}) => {
  const sharedProps = {
    $disabled: disabled,
    $variant: variant,
    $size: size,
  };

  // Anchor version
  if (href) {
    return (
      <StyledButton
        {...sharedProps}
        href={href}
        download={download}
        target={target}
        rel={rel}
      >
        {children ? (
          children
        ) : (
          <>
            {label}
            {icon && <span>{icon}</span>}
          </>
        )}
      </StyledButton>
    );
  }

  // Button version
  return (
    <StyledButton {...sharedProps} as="button" disabled={disabled} {...rest}>
      {children ? (
        children
      ) : (
        <>
          {label}
          {icon && <span>{icon}</span>}
        </>
      )}
    </StyledButton>
  );
};
