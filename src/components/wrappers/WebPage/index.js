/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../commons/Footer';
import Menu from '../../commons/Menu';
import Modal from '../../commons/Modal';
import Box from '../../foundation/layout/Box';
import FormCadastro from '../../pattern/FormCadastro';
import SEO from '../../commons/SEO';

export const WebPageContext = React.createContext({
  toogleModalCadastro: () => {},
});
export default function WebPage({
  children, seoProps, boxProps, menuProps,
}) {
  const [isModalOpen, setModalState] = React.useState(false);

  return (
    <WebPageContext.Provider
      value={{
        toogleModalCadastro: () => setModalState(!isModalOpen),
      }}
    >
      <SEO {...seoProps} />

      <Box flex="1" display="flex" flexDirection="column" {...boxProps}>
        <Modal isOpen={isModalOpen} onClose={() => setModalState(false)}>
          {(propsModal) => (
            <FormCadastro
              onClose={() => setModalState(!isModalOpen)}
              propsModal={propsModal}
            />
          )}
        </Modal>
        {menuProps.display && <Menu onCadastrarClick={() => setModalState(true)} />}
        {children}
        <Footer />
      </Box>
    </WebPageContext.Provider>
  );
}
WebPage.defaultProps = {
  seoProps: {},
  boxProps: {},
  menuProps: {
    display: true,
  },
};

WebPage.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  boxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};
