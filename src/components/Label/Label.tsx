import React from 'react';

import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{ disabled?: boolean }>`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ disabled }) => (disabled ? '#9ca3af' : '#111827')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

export const Label: React.FC<LabelProps> = ({ text, disabled }) => {
  return <StyledLabel disabled={disabled}>{text}</StyledLabel>;
};
