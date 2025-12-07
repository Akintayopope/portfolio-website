import React from "react";
import styled from "styled-components";
import { TypographyProps } from "./Typography.types";

const StyledText = styled.p<{
  $size: "sm" | "md" | "lg" | "xl" | "xxl";
  $muted?: boolean;
  $weight: "normal" | "medium" | "bold";
}>`
  line-height: 1.6;
  margin: 0 auto; /* allows centering */
  text-align: inherit; /* inherits parent alignment */
  color: ${({ $muted }) => ($muted ? "#94a3b8" : "white")};
  font-weight: ${({ $weight }) => $weight};

  ${({ $size }) => {
    switch ($size) {
      case "sm":
        return "font-size: 0.875rem;";
      case "lg":
        return "font-size: 1.25rem;";
      case "xl":
        return "font-size: 1.5rem;";
      case "xxl":
        return `
          font-size: 2.25rem;
          line-height: 1.2;
          font-weight: 800;
        `;
      default:
        return "font-size: 1rem;";
    }
  }}
`;

export const Typography: React.FC<TypographyProps> = ({
  children,
  size = "md",
  muted = false,
  weight = "normal",
  className,
}) => {
  return (
    <StyledText
      $size={size}
      $muted={muted}
      $weight={weight}
      className={className}
    >
      {children}
    </StyledText>
  );
};
