import isStagingEnv from '../../env/isStagingEnv';
import HttpClient from '../../http/HttpClient';
import authService from '../auth/authService';
import loginService from '../login/loginService';

const BASE_URL = isStagingEnv
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  : 'https://instalura-api-omariosouto.vercel.app';

const userService = {
  async getProfilePage(context) {
    try {
      const token = await authService(context).getToken();
      const session = await authService(context).getSession();
      const { user } = await loginService.login({ username: session.user.username, password: 'senhasegura' });
      const response = await HttpClient(`${BASE_URL}/api/users/posts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return {
        user: {
          ...user,
          likes: '100',
        },
        posts: response.data,
      };
    } catch (error) {
      return null;
    }
  },
};
export default userService;
