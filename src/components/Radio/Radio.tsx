import React from 'react';
import styled from 'styled-components';
import { RadioProps } from './Radio.types';

interface WrapperProps {
  htmlFor?: string;
  $disabled?: boolean;
}

const Wrapper = styled.label.attrs<WrapperProps>((props) => ({
  htmlFor: props.htmlFor,
}))<WrapperProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  user-select: none;
`;

const Input = styled.input<{ $disabled?: boolean }>`
  width: 18px;
  height: 18px;
  accent-color: #8b5cf6;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
`;

export const Radio: React.FC<RadioProps & { className?: string }> = ({
  label,
  name,
  value,
  checked = false,
  disabled = false,
  className,
  onChange,
}) => {
  const id = `${name}-${value}`;

  return (
    <Wrapper
      className={`radio-wrapper ${className ?? ''}`}
      htmlFor={id}
      $disabled={disabled}
    >
      <Input
        id={id} // REQUIRED for getByLabelText
        type="radio"
        name={name}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange && onChange(e.target.value)}
        $disabled={disabled}
        style={{ opacity: disabled ? 0.6 : 1 }}
      />

      <span>{label}</span>
    </Wrapper>
  );
};
