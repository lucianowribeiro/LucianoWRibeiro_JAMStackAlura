import { setCookie, destroyCookie } from 'nookies';
import isStagingEnv from '../../env/isStagingEnv';
import HttpClient from '../../http/HttpClient';

const BASE_URL = isStagingEnv
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  : 'https://instalura-api-omariosouto.vercel.app';

export const LOGIN_APP_TOKEN = 'TOKEN_APP';
const loginService = {
  async login({ username, password }, setCookieModule = setCookie, HttpClientModule = HttpClient) {
    return HttpClientModule(`${BASE_URL}/api/login`, {
      method: 'POST',
      body: {
        username,
        password,
      },
    })
      .then((respostaConvertida) => {
        const { token } = respostaConvertida.data;
        const { user } = respostaConvertida.data;
        const hasToken = token;
        if (!hasToken) {
          throw new Error('Failed to login');
        }
        const DAY_IN_SECONDS = 86400;
        // Salvar o Token
        setCookieModule(null, LOGIN_APP_TOKEN, token, {
          path: '/',
          maxAge: DAY_IN_SECONDS * 7,
        });
        // Escrever os testes
        return {
          token,
          user,
        };
      });
  },
  async logout(context, destroyCookieModule = destroyCookie) {
    destroyCookieModule(context, LOGIN_APP_TOKEN, { path: '/' });
  },
};

export default loginService;
