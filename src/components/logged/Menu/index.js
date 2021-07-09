import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../../theme/icons/Logo';
import TextField from '../../forms/TextField';
import MenuWrapper, { AddIcon } from './styles/MenuWrapper';
import HomeIcon from './icons/HomeIcon';
import LikeIcon from '../../../theme/icons/LikeIcon';
import SearchIcon from './icons/SearchIcon';
import Button from '../../commons/Button';
import { LoggedPageContext } from '../../wrappers/LoggedPage/context';
import UserAvatar from '../../../theme/UserAvatar';
import SwitchIcon from '../../../theme/icons/SwitchIcon';

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
            color="background.light"
            mode={mode}
          />
          <SearchIcon mode={mode} />
        </MenuWrapper.SearchSide>
        <Button className="openModal" variant="background.light" onClick={webLogged.tooglePost} mode={mode}>
          <AddIcon mode={mode} />
        </Button>
        <Button variant="background.light" onClick={() => webLogged.toogleFeed(false)} mode={mode}>
          <HomeIcon mode={mode} />
        </Button>
        <LikeIcon variant="background.light" isButton color="tertiary.main" mode={mode} />
        <Button className="openFeed" variant="background.light" onClick={() => webLogged.toogleFeed(true)} mode={mode}>
          <UserAvatar size="smallest" />
        </Button>
        <Button variant="background.light" onClick={switchTheme} mode={mode}>
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
