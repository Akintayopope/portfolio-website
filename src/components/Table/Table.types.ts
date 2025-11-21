import type React from 'react';

export interface TableProps {
  children: React.ReactNode;
  disabled?: boolean;
}

export interface RowProps {
  children: React.ReactNode;
}

export interface CellProps {
  children: React.ReactNode;
}

export interface HeaderProps {
  columns: string[];
}

export interface FooterProps {
  text: string;
}
