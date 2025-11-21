import React from 'react';
import styled from 'styled-components';
import { TextInputProps } from './Text.types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  max-width: 400px;
`;

const StyledLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #111827;
`;

const StyledInput = styled.input<{ $disabled?: boolean }>`
  padding: 10px 12px;
  font-size: 16px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  outline: none;
  width: 100%;
  background: ${({ $disabled }) => ($disabled ? '#e5e7eb' : 'white')};
  color: ${({ $disabled }) => ($disabled ? '#6b7280' : 'inherit')};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'text')};

  &:focus {
    border-color: #2563eb;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const TextInput: React.FC<TextInputProps> = ({
  label,
  disabled = false,
  placeholder = 'Enter text',
  id = 'text-input-' + Math.random().toString(36).slice(2, 8),
  value,
  onChange,
}) => {
  return (
    <Wrapper>
      {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
      <StyledInput
        id={id}
        aria-label={label || placeholder}
        placeholder={placeholder}
        $disabled={disabled}
        disabled={disabled}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </Wrapper>
  );
};
