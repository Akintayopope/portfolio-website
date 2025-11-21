import React from 'react';
import styled from 'styled-components';
import type { FooterProps } from '../Table.types';

const Tf = styled.tfoot`
  background: #f3f4f6;
`;

const Td = styled.td`
  padding: 12px;
  font-weight: bold;
`;

export const TableFooter: React.FC<FooterProps> = ({ text }) => (
  <Tf>
    <tr>
      <Td colSpan={100}>{text}</Td>
    </tr>
  </Tf>
);
