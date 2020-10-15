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
   background-image: linear-gradient(rgba(106, 32, 90, 0.45), rgba(106, 32, 90, 0.80)), url('https://images.unsplash.com/photo-1573495783078-30b34471804b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
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
  color: var(--yellow-color);
`;

export const FixedPhoto: FC = () => {
  return <Container>
    <Logo urlImg="/logo_blue.svg" />
    <JustifyText>
      <p>Somos una comunidad sin ánimo de lucro cuyo objetivo es dar visibilidad y empoderamiento a las mujeres en el sector tecnológico, concretamente, en el sector de desarrollo de software.</p>
      <p>Nuestro nombre proviene de un juego de palabras, donde queríamos hacer tributo a Ada Lovelace, considerada la persona que escribió el primer programa de ordenador, junto con la palabra desarrollo (development).</p>
      <p>Si estás interesada en formar parte de la comunidad, o simplemente quieres colaborar, puedes contactar con nosotras por correo electrónico en <A href="mailto:organization@adalovedev.es">organization@adalovedev.es</A></p>
    </JustifyText>
    <SocialMedia>
      <IconLink src={'https://www.twitter.com/adalovedev'} icon={faTwitter} target="_blank" />
      <IconLink src={'https://www.linkedin.com/company/adalovedev'} icon={faLinkedinIn} target="_blank" />
      <IconLink src={'mailto:organization@adalovedev.es'} icon={faEnvelope} />
    </SocialMedia>
  </Container>;
};
