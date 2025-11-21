import React from 'react';
import styled from 'styled-components';
import { RadioProps } from './Radio.types';

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const Input = styled.input<{ $disabled?: boolean }>`
  width: 18px;
  height: 18px;
  accent-color: #2563eb;
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
`;

export const Radio: React.FC<RadioProps> = ({
  label,
  name,
  value,
  checked = false,
  disabled = false,
  onChange,
}) => {
  return (
    <Wrapper>
      <Input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        $disabled={disabled}
        aria-label={label}
        onChange={() => onChange && onChange(value)}
      />
      {label}
    </Wrapper>
  );
};
