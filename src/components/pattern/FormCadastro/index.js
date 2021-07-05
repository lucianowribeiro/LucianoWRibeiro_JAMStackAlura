/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Lottie } from '@crello/react-lottie';
import PropTypes from 'prop-types';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import CloseModalIcon from '../../../theme/icons/CloseModalIcon';
// eslint-disable-next-line react/prop-types
import Button from '../../commons/Button';
import TextField from '../../forms/TextField';
import Text from '../../foundation/Text';

import ErrorAnimation from '../../../theme/animations/ErrorAnimation.json';
import LoadingAnimation from '../../../theme/animations/LoadingAnimation.json';
import SuccessAnimation from '../../../theme/animations/SuccessAnimation.json';
import Link from '../../commons/Link';
import { WebPageContext } from '../../wrappers/WebPage/context';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function UserContent() {
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const webpage = React.useContext(WebPageContext);
  const [submissionStatus, setSubmissionStatus] = React.useState(
    formStates.DEFAULT,
  );

  const [userInfo, setUserInfo] = React.useState({
    user: '',
    username: '',
  });

  function handleChange(event) {
    const nameField = event.target.getAttribute('name');
    const valueField = event.target.value;
    setUserInfo({
      ...userInfo,
      [nameField]: valueField,
    });
  }
  const isfomInvalid = userInfo.user.length === 0 || userInfo.username.length === 0;
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setIsFormSubmited(true);
        // Data Transfer Object
        const userDTO = {
          username: userInfo.user,
          name: userInfo.username,
        };
        setSubmissionStatus(formStates.LOADING);
        setTimeout(() => {
          fetch('https://instalura-api.vercel.app/api/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userDTO),
          })
            .then((respostaDoServidor) => {
              if (respostaDoServidor.ok) {
                return respostaDoServidor.json();
              }
              throw new Error('Não foi possível cadastrar o usuário agora :(');
            })
            .then((respostaConvertidaEmObjeto) => {
              setSubmissionStatus(formStates.DONE);
              // eslint-disable-next-line no-console
              console.log(respostaConvertidaEmObjeto);
            })
            .catch((error) => {
              setSubmissionStatus(formStates.ERROR);
              // eslint-disable-next-line no-console
              console.error(error);
            });
        }, 2000);
      }}
    >
      <Text variant="title" tag="h1" color="tertiary.main" mode={webpage.mode}>
        Pronto para saber da vida dos outros?
      </Text>

      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
        mode={webpage.mode}
      >
        Você está a um passo de saber tudoo que está rolando no bairro, complete
        seu cadastro agora!
      </Text>
      <div>
        <TextField
          name="user"
          placeholder="User"
          value={userInfo.user}
          onChange={handleChange}
          mode={webpage.mode}
        />
      </div>
      <div>
        <TextField
          name="username"
          placeholder="Username"
          value={userInfo.username}
          onChange={handleChange}
          mode={webpage.mode}
        />
      </div>
      <Button
        type="submit"
        variant="primary.main"
        disabled={isfomInvalid}
        fullWidth
        mode={webpage.mode}
      >
        Cadastrar
      </Button>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.main"
        textAlign="center"
        mode={webpage.mode}
      >
        Já tem uma conta?
        {' '}
        <Link href="/app/login" color="secondary.main" mode={webpage.mode}>
          Entrar
        </Link>
      </Text>
      {isFormSubmited && submissionStatus === formStates.DONE && (
        <Box display="flex" justifyContent="center">
          <Lottie
            width="150px"
            height="150px"
            config={{
              animationData: SuccessAnimation,
              loop: true,
              autoplay: true,
            }}
          />
        </Box>
      )}
      {isFormSubmited && submissionStatus === formStates.LOADING && (
        <Box display="flex" justifyContent="center">
          <Lottie
            width="150px"
            height="150px"
            config={{
              animationData: LoadingAnimation,
              loop: true,
              autoplay: true,
            }}
          />
        </Box>
      )}
      {isFormSubmited && submissionStatus === formStates.ERROR && (
        <Box display="flex" justifyContent="center">
          <Lottie
            width="150px"
            height="150px"
            config={{
              animationData: ErrorAnimation,
              loop: true,
              autoplay: true,
            }}
          />
        </Box>
      )}
    </form>
  );
}

export default function FormCadastro({ onClose, propsModal, mode }) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="center"
      position="relative"
    >
      <Grid.Col
        display="flex"
        backgroundColor="background.main"
        paddingRight={{ md: '0' }}
        value={{ xs: 12, md: 5, lg: 4 }}
        mode={mode}
      >
        <Box
          mode={mode}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          backgroundColor="background.main"
          padding={{
            xs: '16px',
            md: '85px',
          }}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsModal}
        >
          <CloseModalIcon
            type="user"
            onClick={() => {
              onClose();
            }}
            mode={mode}
          />
          <UserContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
FormCadastro.propTypes = {
  onClose: PropTypes.func.isRequired,
  propsModal: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired,
};
