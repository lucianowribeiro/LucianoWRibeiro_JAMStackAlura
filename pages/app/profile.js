import React from 'react';
import authService from '../../src/services/auth/authService';
import userService from '../../src/services/user/userService';

export default function ProfilePage(props) {
  return (
    <div>
      Página de Profile!
      {JSON.stringify(props, null, 4)}
      <img src="https://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif" alt="Nicolas Cage" />
    </div>
  );
}

export async function getServerSideProps(context) {
  const auth = authService(context);
  const hasActiveSession = await auth.hasActiveSession();
  if (hasActiveSession) {
    console.log(hasActiveSession);
    const session = await auth.getSession();
    const profilePage = await userService.getProfilePage(context);
    return {
      props: {
        user: {
          ...session,
          ...profilePage.user,
        },
        post: {
          ...profilePage.posts,
        },
      },
    };
  }
  context.res.writeHead(307, { location: '/login' });
  context.res.end();
  return {
    props: {},
  };
}
