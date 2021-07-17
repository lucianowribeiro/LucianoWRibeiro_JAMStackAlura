import isStagingEnv from '../../env/isStagingEnv';
import HttpClient from '../../http/HttpClient';
import authService from '../auth/authService';

const BASE_URL = isStagingEnv
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  : 'https://instalura-api-omariosouto.vercel.app';

const likeService = {
  async like(id, data, HttpClientModule = HttpClient) {
    try {
      const token = await authService().getToken();
      const response = await HttpClientModule(`${BASE_URL}/api/posts/${id}/like`, {
        method: 'POST',
        body: { data },
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

export default likeService;
