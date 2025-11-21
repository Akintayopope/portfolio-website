import React from 'react';
import styled from 'styled-components';
import type { TableProps } from './Table.types';

const StyledTable = styled.table<{ disabled?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
`;

export const Table: React.FC<TableProps> = ({ children, disabled = false }) => (
  <StyledTable disabled={disabled}>{children}</StyledTable>
);
