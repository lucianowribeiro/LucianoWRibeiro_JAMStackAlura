import React from 'react';
// eslint-disable-next-line import/prefer-default-export
export const LoggedPageContext = React.createContext({
  toogleUserPerfil: () => {},
  tooglePost: () => {},
  isUserPerfil: false,
  profile: {},
  switchTheme: () => {},
});
