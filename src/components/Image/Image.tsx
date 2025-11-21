import React from 'react';
import styled from 'styled-components';
import { ImageProps } from './Image.types';

const StyledImg = styled.img<{ $disabled?: boolean; $rounded?: boolean }>`
  width: 100%;
  height: auto;
  border-radius: ${({ $rounded }) => ($rounded ? '12px' : '0px')};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'auto')};
`;

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width = '100%',
  height = 'auto',
  rounded = false,
  disabled = false,
}) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      width={width}
      height={height}
      $rounded={rounded}
      $disabled={disabled}
    />
  );
};
