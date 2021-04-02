import { setCookie, destroyCookie } from 'nookies';
import isStagingEnv from '../../infra/env/isStagingEnv';

async function HttpClient(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  })
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
      throw new Error();
    });
}
const BASE_URL = isStagingEnv
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  : 'https://instalura-api-omariosouto.vercel.app';

const loginService = {
  async login({ username, password }) {
    return HttpClient(`${BASE_URL}/api/login`, {
      method: 'POST',
      body: {
        username, // 'omariosouto'
        password, // 'senhasegura'
      },
    })
      .then((respostaConvertida) => {
        const { token } = respostaConvertida.data;
        const DAY_IN_SECONDS = 86400;
        // Salvar o Token
        setCookie(null, 'APP_TOKEN', token, {
          path: '/',
          maxAge: DAY_IN_SECONDS * 7,
        });

        // Escrever os testes
        return {
          token,
        };
      });
  },
  logout() {
    destroyCookie(null, 'APP_TOKEN');
  },
};

export default loginService;
