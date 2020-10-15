import React, { FC } from 'react';
import styled from '@emotion/styled';

const Img = styled.img`
  max-height: 50vh;
`;

interface LogoProps {
  urlImg: string
}

export const Logo: FC<LogoProps> = ({ urlImg }) => {
  return <Img src={urlImg}/>;
};
