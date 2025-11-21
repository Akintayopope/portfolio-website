import React from 'react';
import styled from 'styled-components';
import type { HeaderProps } from '../Table.types';

const Th = styled.th`
  padding: 12px;
  background: #f3f4f6;
  font-weight: bold;
  text-align: left;
  border-bottom: 2px solid #e5e7eb;
`;

const HeaderRow = styled.tr``;

export const TableHeader: React.FC<HeaderProps> = ({ columns }) => (
  <thead>
    <HeaderRow>
      {columns.map((col) => (
        <Th key={col}>{col}</Th>
      ))}
    </HeaderRow>
  </thead>
);
