import React from "react";
import styled from "styled-components";
import { RadioProps } from "./Radio.types";

const Wrapper = styled.label.attrs((props: any) => ({
  htmlFor: props.htmlFor,
}))<{ $disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  user-select: none;
`;

const Input = styled.input<{ $disabled?: boolean }>`
  width: 18px;
  height: 18px;
  accent-color: #8b5cf6;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
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
      className={`radio-wrapper ${className ?? ""}`}
      htmlFor={id} // ⭐ now forwarded properly
      $disabled={disabled}
    >
      <Input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        $disabled={disabled}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
      <span>{label}</span>
    </Wrapper>
  );
};
