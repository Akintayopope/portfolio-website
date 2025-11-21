import React from 'react';
import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  disabled?: boolean;
}

const StyledButton = styled.button<{ $disabled?: boolean }>`
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: ${({ $disabled }) => ($disabled ? '#c9cdd3' : '#2563eb')};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ $disabled }) => ($disabled ? '#c9cdd3' : '#1e40af')};
  }
`;

export const Button: React.FC<ButtonProps> = ({
  label,
  disabled = false,
  ...rest
}) => {
  return (
    <StyledButton
      $disabled={disabled} // 👈 this prop controls the grey color
      disabled={disabled} // 👈 this makes it non-clickable in browser
      {...rest}
    >
      {label}
    </StyledButton>
  );
};
