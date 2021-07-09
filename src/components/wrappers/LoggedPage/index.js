/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../commons/Modal';
import Box from '../../foundation/layout/Box';
import SEO from '../../commons/SEO';
import { LoggedPageContext } from './context';
import FormPost from '../../pattern/FormPost';

export { LoggedPageContext } from './context';

export default function LoggedPage({ children, profile }) {
  const [isFeed, setFeed] = React.useState(false);
  const [isPostOpen, setPostOpen] = React.useState(false);
  const [isTheme, setTheme] = React.useState('light');
  const [image, setImage] = React.useState({
    have: false,
    loading: false,
    url: '',
    ready: false,
  });
  return (
    <LoggedPageContext.Provider
      value={{
        toogleFeed: (status) => setFeed(status),
        tooglePost: () => setPostOpen(!isPostOpen),
        isFeed,
        profile,
        mode: isTheme,
        switchTheme: () => (isTheme === 'light' ? setTheme('dark') : setTheme('light')),
      }}
    >
      <SEO headTitle={`Seja bem vindo(a) ${profile.user.name}`} />
      <Box
        display="flex"
        backgroundColor="background.main"
        flexDirection={{ xs: 'column-reverse', md: 'column' }}
        alignItems="center"
        minHeight="100vh"
        mode={isTheme}
      >
        <Modal
          isOpen={isPostOpen}
          onClose={() => setPostOpen(!isPostOpen)}
        >
          {(propsModal) => (
            <FormPost
              image={image}
              setImage={setImage}
              onClose={() => setPostOpen(!isPostOpen)}
              resetPostForm={() => setImage({
                have: false,
                loading: false,
                url: '',
                ready: false,
              })}
              propsModal={propsModal}
              mode={isTheme}
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
