import React from 'react';
import styled from 'styled-components';
import type { RowProps } from '../Table.types';

const Tr = styled.tr`
  &:nth-child(even) {
    background: #f9fafb;
  }
`;

export const TableRow: React.FC<RowProps> = ({ children }) => (
  <Tr>{children}</Tr>
);
