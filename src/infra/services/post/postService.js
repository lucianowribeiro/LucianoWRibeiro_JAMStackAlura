import isStagingEnv from '../../env/isStagingEnv';
import HttpClient from '../../http/HttpClient';
import authService from '../auth/authService';

const BASE_URL = isStagingEnv
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  : 'https://instalura-api-omariosouto.vercel.app';

const postService = {
  async post(data) {
    try {
      const token = await authService().getToken();
      const response = await HttpClient(`${BASE_URL}/api/posts`, {
        method: 'POST',
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      return null;
    }
  },

};

export default postService;
