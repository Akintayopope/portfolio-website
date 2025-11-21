import React from 'react';
import styled from 'styled-components';
import type { CellProps } from '../Table.types';

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #e5e7eb;
`;

export const TableCell: React.FC<CellProps> = ({ children }) => (
  <Td>{children}</Td>
);
