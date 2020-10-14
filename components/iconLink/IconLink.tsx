import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from '@emotion/styled';

const A = styled.a`
  color: inherit;
  margin: 8px;
`;

interface Props {
  src: string;
  icon: IconDefinition;
  target?: string;
}

export const IconLink: FC<Props> = ({ src, icon, target }) => {
  return <A href={src} target={target}>
    <FontAwesomeIcon icon={icon}/>
  </A>;
};
