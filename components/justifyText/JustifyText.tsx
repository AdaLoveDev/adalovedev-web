import React, { FC } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 70vw;
  text-align: justify;
  font-size: 24px;
  color: #FFF;
  @media(max-width: 768px) {
    font-size: 20px;
  }
  @media(max-width: 540px) {
    font-size: 16px;
  }
  @media(max-width: 280px) {
    font-size: 12px;
  }
`;

export const JustifyText: FC = ({ children }) => {
  return <Container>{children}</Container>;
};
