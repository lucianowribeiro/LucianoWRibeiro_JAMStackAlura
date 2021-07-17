import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../../theme/icons/Logo';
import Text from '../../foundation/Text';
import Button from '../Button';
import MenuWrapper from './styles/MenuWrapper';
import SwitchIcon from '../../../theme/icons/SwitchIcon';

const links = [
  {
    texto: 'Home',
    url: '/',
  },
  {
    texto: 'Perguntas Frequentes',
    url: '/faq',
  },
  {
    texto: 'Sobre',
    url: '/sobre',
  },
];
export default function Menu({
  currentPage, onCadastrarClick, onSwitchTheme, mode,
}) {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo mode={mode} />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide mode={mode}>
        {links.map((link) => (
          <li key={link.url}>
            <Text color="tertiary.main" href={link.url} mode={mode}>
              {link.texto === currentPage && link.texto}
            </Text>
            <Text color="tertiary.light" href={link.url} mode={mode}>
              {link.texto !== currentPage && link.texto}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main" href="/app/login" mode={mode}>
          Entrar
        </Button>
        <Button variant="primary.main" onClick={onCadastrarClick} mode={mode}>
          Cadastrar
        </Button>
        <Button ghost onClick={onSwitchTheme} mode={mode}>
          <SwitchIcon mode={mode} />
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
Menu.defaultProps = {
  currentPage: 'Home',
};

Menu.propTypes = {
  currentPage: PropTypes.string,
  onCadastrarClick: PropTypes.func.isRequired,
  onSwitchTheme: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};
