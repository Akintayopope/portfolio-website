import React, { useState } from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';
import { ChevronDown } from 'lucide-react';

/* ---------- FORM DROPDOWN ---------- */

const Wrapper = styled.div<{ disabled?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 6px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const StyledSelect = styled.select<{ disabled?: boolean }>`
  padding: 10px;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid #d1d5db;

  background: ${({ disabled }) => (disabled ? '#e5e7eb' : 'white')};
  color: ${({ disabled }) => (disabled ? '#6b7280' : '#111827')};
`;

/* ---------- MENU DROPDOWN ---------- */

const MenuWrapper = styled.div`
  position: relative;
`;

const Trigger = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
`;

/* Mobile / Desktop menu container */
const Menu = styled.div<{ mobile?: boolean }>`
  position: ${({ mobile }) => (mobile ? 'fixed' : 'absolute')};
  top: ${({ mobile }) => (mobile ? '64px' : '110%')};
  left: 0;
  right: 0;

  background: rgba(2, 6, 23, 0.98);
  backdrop-filter: blur(6px);

  padding: 0;
  width: 100%;
  height: ${({ mobile }) => (mobile ? 'calc(100vh - 64px)' : 'auto')};

  display: flex;
  flex-direction: column;
  overflow-y: auto;
  z-index: 9999;
`;

const MenuItem = styled.div`
  width: 100%;
  display: block;

  a {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 14px 20px;
    width: 100%;
    color: #cbd5e1;
    text-decoration: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  a:hover {
    background: rgba(255, 255, 255, 0.05);
    color: white;
  }
`;

/* ---------- COMPONENT ---------- */

export const Dropdown: React.FC<DropdownProps> = ({
  type = 'form',
  label,
  options = [],
  children,
  icon,
  disabled = false,
  id = 'dropdown',
  mobile = false,
  onItemClick,
}) => {
  const [open, setOpen] = useState(false);

  if (type === 'form') {
    return (
      <Wrapper disabled={disabled}>
        {label && <label htmlFor={id}>{label}</label>}
        <StyledSelect id={id} disabled={disabled}>
          {options.map((opt: string) => (
            <option key={opt}>{opt}</option>
          ))}
        </StyledSelect>
      </Wrapper>
    );
  }

  return (
    <MenuWrapper>
      <Trigger
        onClick={() => {
          const next = !open;
          setOpen(next);
          if (next) document.body.classList.add('menu-open');
          else document.body.classList.remove('menu-open');
        }}
      >
        {icon}
        {label}
        <ChevronDown
          size={16}
          style={{ transform: open ? 'rotate(180deg)' : 'none' }}
        />
      </Trigger>

      {open && (
        <Menu mobile={mobile}>
          {React.Children.map(children, (child) => (
            <MenuItem
              onClick={() => {
                setOpen(false);
                document.body.classList.remove('menu-open');
                onItemClick?.();
              }}
            >
              {child}
            </MenuItem>
          ))}
        </Menu>
      )}
    </MenuWrapper>
  );
};
