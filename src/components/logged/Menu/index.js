import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../../theme/Logo';
import TextField from '../../forms/TextField';
import MenuWrapper, { AddIcon } from './styles/MenuWrapper';
import HomeIcon from './icons/HomeIcon';
import LikeIcon from '../../../theme/LikeIcon';
import SearchIcon from './icons/SearchIcon';
import Button from '../../commons/Button';
import { LoggedPageContext } from '../../wrappers/LoggedPage/context';
import UserAvatar from '../../../theme/UserAvatar';
import SwitchIcon from '../../../theme/SwitchIcon';

export default function Menu({ mode, switchTheme }) {
  const webLogged = React.useContext(LoggedPageContext);
  return (
    <MenuWrapper mode={mode}>
      <Logo mode={mode} />
      <MenuWrapper.LeftSide>
        <MenuWrapper.SearchSide>
          <TextField
            type="search"
            placeholder="Pesquisar"
            name="pesquisar"
            mode={mode}
          />
          <SearchIcon mode={mode} />
        </MenuWrapper.SearchSide>
        <Button variant="secondary.main" onClick={webLogged.tooglePost}>
          <AddIcon mode={mode} />
        </Button>
        <Button variant="background.light" onClick={() => webLogged.toogleUserPerfil(false)}>
          <HomeIcon mode={mode} />
        </Button>
        <LikeIcon isButton mode={mode} />
        <Button variant="background.light" onClick={() => webLogged.toogleUserPerfil(true)}>
          <UserAvatar size="smallest" />
        </Button>
        <Button variant="background.light" onClick={switchTheme}>
          <SwitchIcon mode={mode} />
        </Button>
      </MenuWrapper.LeftSide>
    </MenuWrapper>
  );
}

Menu.propTypes = {
  mode: PropTypes.string.isRequired,
  switchTheme: PropTypes.func.isRequired,
};
