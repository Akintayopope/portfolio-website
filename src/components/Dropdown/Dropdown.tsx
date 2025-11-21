import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const Wrapper = styled.div<{ disabled?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 6px;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
`;

const StyledSelect = styled.select<{ disabled?: boolean }>`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #d1d5db;
  border-radius: 6px;

  background-color: ${({ disabled }) => (disabled ? '#e5e7eb' : 'white')};
  color: ${({ disabled }) => (disabled ? '#6b7280' : '#111827')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  ${({ disabled }) =>
    disabled &&
    `
      opacity: 0.6;
    `}
`;

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  disabled = false,
  id = 'dropdown',
}) => {
  return (
    <Wrapper disabled={disabled}>
      {label && <label htmlFor={id}>{label}</label>}
      <StyledSelect id={id} disabled={disabled}>
        {options.map((opt: string) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </StyledSelect>
    </Wrapper>
  );
};
