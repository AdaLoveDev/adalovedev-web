import React, { FC } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 70vw;
  text-align: justify;
  font-size: 24px;
  color: #FFF;
`;

export const JustifyText: FC = ({ children }) => {
  return <Container>{children}</Container>;
};
