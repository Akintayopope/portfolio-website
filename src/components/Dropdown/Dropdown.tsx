import React, { useState } from "react";
import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";
import { ChevronDown } from "lucide-react";

/* ---------- STYLES FOR FORM VERSION ---------- */
const Wrapper = styled.div<{ disabled?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 6px;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const StyledSelect = styled.select<{ disabled?: boolean }>`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #d1d5db;
  border-radius: 6px;

  background: ${({ disabled }) => (disabled ? "#e5e7eb" : "white")};
  color: ${({ disabled }) => (disabled ? "#6b7280" : "#111827")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

/* ---------- STYLES FOR MENU VERSION ---------- */
const MenuWrapper = styled.div`
  position: relative;
`;

const Trigger = styled.button`
  background: none;
  border: none;
  color: inherit;
  font: inherit;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;

const Menu = styled.div<{ mobile?: boolean }>`
  position: ${({ mobile }) => (mobile ? "static" : "absolute")};
  top: ${({ mobile }) => (mobile ? "0" : "110%")};
  left: 0;
  background: ${({ mobile }) => (mobile ? "transparent" : "#0f172a")};
  border: ${({ mobile }) => (mobile ? "none" : "1px solid #1e293b")};
  padding: 0.5rem 0;
  min-width: ${({ mobile }) => (mobile ? "100%" : "180px")};
  border-radius: 8px;
  z-index: 20;
`;

const MenuItem = styled.div`
  a {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    text-decoration: none;
    color: #e2e8f0;
  }
  a:hover {
    background: #1e293b;
  }
`;

/* ---------- COMPONENT ---------- */

export const Dropdown: React.FC<DropdownProps> = ({
  type = "form",
  label,
  options = [],
  children,
  icon,
  disabled = false,
  id = "dropdown",
  mobile = false,
}) => {
  const [open, setOpen] = useState(false);

  /* ------- FORM MODE ------- */
  if (type === "form") {
    return (
      <Wrapper disabled={disabled}>
        {label && <label htmlFor={id}>{label}</label>}
        <StyledSelect id={id} disabled={disabled}>
          {options.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </StyledSelect>
      </Wrapper>
    );
  }

  /* ------- MENU MODE ------- */
  return (
    <MenuWrapper>
      <Trigger onClick={() => setOpen((prev) => !prev)}>
        {icon}
        {label}
        <ChevronDown
          size={16}
          style={{ transform: open ? "rotate(180deg)" : "none" }}
        />
      </Trigger>

      {open && (
        <Menu mobile={mobile}>
          <MenuItem>{children}</MenuItem>
        </Menu>
      )}
    </MenuWrapper>
  );
};
