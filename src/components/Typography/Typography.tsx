import React from "react";
import styled from "styled-components";
import { TypographyProps } from "./Typography.types";

const StyledText = styled.p<{
  $size: "sm" | "md" | "lg" | "xl";
  $muted?: boolean;
  $weight: "normal" | "medium" | "bold";
}>`
  line-height: 1.6;
  margin: 0;
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
