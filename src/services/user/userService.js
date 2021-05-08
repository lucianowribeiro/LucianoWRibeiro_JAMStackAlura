import isStagingEnv from '../../infra/env/isStagingEnv';
import HttpClient from '../../infra/http/HttpClient';
import authService from '../auth/authService';

const BASE_URL = isStagingEnv
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  : 'https://instalura-api-omariosouto.vercel.app';

const userService = {
  async getProfilePage(context) {
    try {
      const token = await authService(context).getToken();
      console.log(token);
      const response = await HttpClient(`${BASE_URL}/api/users/posts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return {
        user: {
          likes: '100',
        },
        posts: response.data,
      };
    } catch (err) {
      throw new Error(err);
    }
  },
};
export default userService;
