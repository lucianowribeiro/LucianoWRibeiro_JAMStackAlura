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
            value=""
          />
          <SearchIcon />
        </MenuWrapper.SearchSide>
        <Button variant="secondary.main" onClick={webLogged.tooglePost}>
          <AddIcon />
        </Button>
        <Button variant="background.light" onClick={webLogged.isUserPerfil && webLogged.toogleUserPerfil}>
          <HomeIcon />
        </Button>
        <LikeIcon />
        <Button variant="background.light" onClick={!webLogged.isUserPerfil && webLogged.toogleUserPerfil}>
          <UserAvatar size="smallest" />
        </Button>
      </MenuWrapper.LeftSide>
    </MenuWrapper>
  );
}
