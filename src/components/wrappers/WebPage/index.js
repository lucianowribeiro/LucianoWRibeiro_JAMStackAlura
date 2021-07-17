/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import Footer from '../../commons/Footer';
import Menu from '../../commons/Menu';
import Modal from '../../commons/Modal';
import Box from '../../foundation/layout/Box';
import SEO from '../../commons/SEO';

import { WebPageContext } from './context';
import FormCadastro from '../../pattern/FormCadastro';

export { WebPageContext } from './context';

export default function WebPage({
  children,
  seoProps,
  boxProps,
  menuProps,
  messages,
}) {
  const [isModalOpen, setModalState] = React.useState(false);
  const [isTheme, setTheme] = React.useState('light');
  return (
    <WebPageContext.Provider
      value={{
        toogleModalCadastro: () => setModalState(!isModalOpen),
        getCMSContent: (csmkey) => get(messages, csmkey),
        mode: isTheme,
      }}
    >
      <SEO headTitle={seoProps.headTitle} />

      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        backgroundColor="background.main"
        backgroundImage={isTheme === 'light' ? 'url(/images/bubblesLight.svg)' : 'url(/images/bubblesDark.svg)'}
        mode={isTheme}
        {...boxProps}
      >
        <Modal isOpen={isModalOpen} onClose={() => setModalState(false)}>
          {(propsModal) => (
            <FormCadastro
              onClose={() => setModalState(!isModalOpen)}
              propsModal={propsModal}
              mode={isTheme}
            />
          )}
        </Modal>
        {menuProps.display && (
          <Menu
            currentPage={seoProps.pathName}
            onCadastrarClick={() => setModalState(true)}
            mode={isTheme}
            onSwitchTheme={() => (isTheme === 'light' ? setTheme('dark') : setTheme('light'))}
          />
        )}
        {children}
        <Footer mode={isTheme} />
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
  messages: {},
};

WebPage.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
    pathName: PropTypes.string,
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
  // eslint-disable-next-line react/forbid-prop-types
  messages: PropTypes.object,
};
