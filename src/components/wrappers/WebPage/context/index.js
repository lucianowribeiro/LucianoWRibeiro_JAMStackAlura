import React from 'react';
// eslint-disable-next-line import/prefer-default-export
export const WebPageContext = React.createContext({
  toogleModalCadastro: () => {},
  getCMSContent: (csmkey) => csmkey,
  mode: '',
});
