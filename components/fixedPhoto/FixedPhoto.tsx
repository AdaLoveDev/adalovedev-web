import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Logo } from '../logo/Logo';
import { JustifyText } from '../justifyText/JustifyText';
import { IconLink } from '../iconLink/IconLink';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';

const Container = styled.div`
   min-height: 100vh;
   //background-image: linear-gradient(rgba(106, 32, 90, 0.30), rgba(106,32,90,0.30)), url('/collage.png');
   //background-image: linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/collage.png');
   background-image: linear-gradient(rgba(106, 32, 90, 0.60), rgba(106,32,90,0.75));
   background-position: center;
   background-size: cover;
   text-shadow: 0 0 4px rgba(0,0,0,0.5);
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 2rem;
 `;

const SocialMedia = styled.div`
  color: #FFF;
  font-size: 35px;
  padding-top: 3rem;
`;

const A = styled.a`
  color: var(--blue-color);
`;

export const FixedPhoto: FC = () => {
  return <Container>
    <Logo urlImg="/logo_blue_white.svg" />
    <JustifyText>
      <p>Somos una comunidad sin ánimo de lucro cuyo objetivo es dar visibilidad y empoderamiento a las mujeres en el sector tecnológico, concretamente, en el sector de desarrollo de software.</p>
      <p>Nuestro nombre es un tributo a Ada Lovelace, considerada la persona que escribió el primer programa de ordenador, y el amor por el desarrollo (development).</p>
      <p>Si estás interesada en formar parte de la comunidad, o simplemente quieres colaborar, puedes contactar con nosotras por correo electrónico en <A href="mailto:organization@adalovedev.es">organization@adalovedev.es</A></p>
    </JustifyText>
    <SocialMedia>
      <IconLink src={'https://www.twitter.com/adalovedev'} icon={faTwitter} target="_blank" />
      <IconLink src={'https://www.linkedin.com/company/adalovedev'} icon={faLinkedinIn} target="_blank" />
      <IconLink src={'mailto:organization@adalovedev.es'} icon={faEnvelope} />
    </SocialMedia>
  </Container>;
};
