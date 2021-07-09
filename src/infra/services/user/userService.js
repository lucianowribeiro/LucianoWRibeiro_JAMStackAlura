import isStagingEnv from '../../env/isStagingEnv';
import HttpClient from '../../http/HttpClient';
import authService from '../auth/authService';
import loginService from '../login/loginService';

const BASE_URL = isStagingEnv
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  : 'https://instalura-api-omariosouto.vercel.app';

const userService = {
  async getProfilePage(password, context) {
    try {
      const token = await authService(context).getToken();
      const session = await authService(context).getSession();
      const { user } = await loginService.login({ username: session.user.username, password });
      const response = await HttpClient(`${BASE_URL}/api/users/posts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return {
        user: {
          ...user,
        },
        posts: response.data,
      };
    } catch (error) {
      return null;
    }
  },
  getPassword() {
    return process.env.PASSWORD_DEFAULT;
  },
};
export default userService;
