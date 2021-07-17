/* eslint-disable react/prop-types */
import React from 'react';
import { Lottie } from '@crello/react-lottie';
import authService from '../../src/infra/services/auth/authService';
import userService from '../../src/infra/services/user/userService';
import useUserService from '../../src/infra/hooks/user/useUserService';
import LoadingAnimation from '../../src/theme/animations/LoadingAnimation.json';
import ErrorAnimation from '../../src/theme/animations/ErrorAnimation.json';
import Box from '../../src/components/foundation/layout/Box';
import Text from '../../src/components/foundation/Text';
import WebGlobalProvider from '../../src/components/wrappers/WebPage/provider';
import Button from '../../src/components/commons/Button';
import ProfileScreen from '../../src/components/screens/ProfileScreen';
import LoggedPage from '../../src/components/wrappers/LoggedPage';

export default function ProfilePage({ password }) {
  const response = useUserService.getProfilePage(password);
  return (
    <WebGlobalProvider>
      {response.LOADING && (
        <Box
          height="90vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Lottie
            width="300px"
            height="300px"
            config={{
              animationData: LoadingAnimation,
              loop: true,
              autoplay: true,
            }}
          />
        </Box>
      )}
      {!response.LOADING && response.ERROR && !response.DATA && (
        <Box
          height="90vh"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Lottie
            width="200px"
            height="200px"
            config={{
              animationData: ErrorAnimation,
              loop: true,
              autoplay: true,
            }}
          />
          <Text tag="p" variant="paragraph1" color="error.main">
            {response.ERROR}
          </Text>
          <Button variant="primary.main" href="/app/login">
            Voltar
          </Button>
        </Box>
      )}
      {!response.LOADING && !response.ERROR && response.DATA && (
        <LoggedPage profile={response.DATA}>
          <ProfileScreen />
        </LoggedPage>
      )}
    </WebGlobalProvider>
  );
}

export async function getServerSideProps(context) {
  const auth = authService(context);
  const hasActiveSession = await auth.hasActiveSession();
  if (hasActiveSession) {
    const password = await userService.getPassword();
    return {
      props: {
        password,
      },
    };
  }
  context.res.writeHead(307, { location: '/login' });
  context.res.end();
  return {
    props: {},
  };
}
