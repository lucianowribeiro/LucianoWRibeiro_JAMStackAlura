import React from 'react';
import userService from '../../services/user/userService';

const useUserService = {
  getProfilePage(password) {
    const [response, setResponse] = React.useState({
      DATA: null,
      LOADING: true,
      ERROR: null,
    });
    React.useEffect(() => {
      userService.getProfilePage(password)
        .then((responseFromServer) => {
          if (responseFromServer) {
            setResponse({
              DATA: responseFromServer,
              LOADING: false,
              ERROR: null,
            });
          } else {
            setResponse({
              DATA: null,
              LOADING: false,
              ERROR: 'Erro ao buscar dados do usuario ,por favor tente novamente',
            });
          }
        });
    }, []);
    return response;
  },
};
export default useUserService;
