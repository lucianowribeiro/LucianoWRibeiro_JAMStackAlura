/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../commons/Modal';
import Box from '../../foundation/layout/Box';
import SEO from '../../commons/SEO';
import { LoggedPageContext } from './context';
import FormCadastro from '../../pattern/FormCadastro';

export { LoggedPageContext } from './context';

export default function LoggedPage({ children, profile }) {
  const [isUserPerfil, setUserPerfil] = React.useState(false);
  const [isPostOpen, setPostOpen] = React.useState(false);
  return (
    <LoggedPageContext.Provider
      value={{
        toogleUserPerfil: () => setUserPerfil(!isUserPerfil),
        tooglePost: () => setPostOpen(!isPostOpen),
        isUserPerfil,
        profile,
      }}
    >
      <SEO headTitle={`Seja bem vindo(a) ${profile.user.name}`} />
      <Box
        display="flex"
        backgroundColor="background.main"
        flexDirection={{ xs: 'column-reverse', md: 'column' }}
        alignItems="center"
        minHeight="100vh"
      >
        <Modal isOpen={isPostOpen} onClose={() => setPostOpen(!isPostOpen)}>
          {(propsModal) => (
            <FormCadastro
              onClose={() => setPostOpen(!isPostOpen)}
              propsModal={propsModal}
            />
          )}
        </Modal>
        {children}
      </Box>
    </LoggedPageContext.Provider>
  );
}
LoggedPage.defaultProps = {
  profile: {},
};

LoggedPage.propTypes = {
  profile: PropTypes.object,
  children: PropTypes.node.isRequired,
};
