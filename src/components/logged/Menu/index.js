import React from 'react';
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

export default function Menu() {
  const webLogged = React.useContext(LoggedPageContext);
  return (
    <MenuWrapper>
      <Logo />
      <MenuWrapper.LeftSide>
        <MenuWrapper.SearchSide>
          <TextField
            type="search"
            placeholder="Pesquisar"
            name="pesquisar"
          />
          <SearchIcon />
        </MenuWrapper.SearchSide>
        <Button variant="secondary.main" onClick={webLogged.tooglePost}>
          <AddIcon />
        </Button>
        <Button variant="background.light" onClick={() => webLogged.toogleUserPerfil(false)}>
          <HomeIcon />
        </Button>
        <LikeIcon isButton />
        <Button variant="background.light" onClick={() => webLogged.toogleUserPerfil(true)}>
          <UserAvatar size="smallest" />
        </Button>
        <Button variant="background.light">
          <SwitchIcon />
        </Button>
      </MenuWrapper.LeftSide>
    </MenuWrapper>
  );
}
