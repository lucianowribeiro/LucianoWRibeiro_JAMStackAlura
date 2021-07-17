import isStagingEnv from '../../env/isStagingEnv';
import HttpClient from '../../http/HttpClient';
import authService from '../auth/authService';

const BASE_URL = isStagingEnv
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  : 'https://instalura-api-omariosouto.vercel.app';

const postService = {
  async post(data, HttpClientModule = HttpClient, authServiceModule = authService) {
    try {
      const token = await authServiceModule().getToken();
      const response = await HttpClientModule(`${BASE_URL}/api/posts`, {
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
