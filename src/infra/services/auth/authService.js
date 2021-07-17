import { parseCookies } from 'nookies';
import jwt from 'jsonwebtoken';
import loginService, { LOGIN_APP_TOKEN } from '../login/loginService';
import HttpClient from '../../http/HttpClient';
import isStagingEnv from '../../env/isStagingEnv';

const BASE_URL = isStagingEnv
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  : 'https://instalura-api-omariosouto.vercel.app';

const authService = (context) => {
  const cookies = parseCookies(context);
  const token = cookies[LOGIN_APP_TOKEN];
  return {
    async getToken() {
      return token;
    },
    async hasActiveSession() {
      return HttpClient(`${BASE_URL}/api/auth`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(({ data }) => {
          if (data.authenticated) {
            return true;
          }
          loginService.logout(context);
          return false;
        })
        .catch(() => {
          loginService.logout(context);
          return false;
        });
    },
    async getSession() {
      const session = jwt.decode(token);
      return session;
    },
  };
};

export default authService;
