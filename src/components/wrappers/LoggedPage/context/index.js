import React from 'react';
// eslint-disable-next-line import/prefer-default-export
export const LoggedPageContext = React.createContext({
  toogleFeed: () => {},
  tooglePost: () => {},
  isFeed: false,
  profile: {},
  mode: '',
  switchTheme: () => {},
});
