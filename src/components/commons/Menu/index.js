import React from 'react';
import { Logo } from '../../../theme/Logo';
import { Button } from '../Button';
import { MenuWrapper } from './styles/MenuWrapper';

export default function Menu() {
  const links = [
    {url: '/', name: 'Home' },
    {url: '/faq', name: 'Perguntas Frequentes' },
    {url: '/sobre', name: 'Sobre'}
  ];
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide> {/* MenuWrapper.LeftSide */}
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide> {/* MenuWrapper.CentralSide */}
        {links.map((link) => {
            return (
                <li key={link.url}>
                    <a href={link.url}>
                        {link.name}
                    </a>
                </li>
            )
        })}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide> {/* MenuWrapper.RightSide */}
        <Button ghost variant="secondary.main">
          Entrar
        </Button>
        <Button variant="primary.main">
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
} 