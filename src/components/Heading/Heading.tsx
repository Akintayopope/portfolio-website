import React from "react";
import styled from "styled-components";
import { HeadingProps } from "./Heading.types";

const StyledH1 = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
`;

const StyledH2 = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.3;
`;

const StyledH3 = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.4;
`;

export const Heading: React.FC<HeadingProps> = ({
  children,
  level = 1,
  className,
}) => {
  switch (level) {
    case 1:
      return <StyledH1 className={className}>{children}</StyledH1>;
    case 2:
      return <StyledH2 className={className}>{children}</StyledH2>;
    case 3:
      return <StyledH3 className={className}>{children}</StyledH3>;
    default:
      return <StyledH1 className={className}>{children}</StyledH1>;
  }
};
