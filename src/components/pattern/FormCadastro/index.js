/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Lottie } from '@crello/react-lottie';

import Button from '../../commons/Button';
import Grid from '../../foundation/layout/Grid';
import Box from '../../foundation/layout/Box';
import TextField from '../../forms/TextField';
import Text from '../../foundation/Text';
import CloseModal from '../../../theme/CloseModal';

import ErrorAnimation from './animations/ErrorAnimation.json';
import LoadingAnimation from './animations/LoadingAnimation.json';
import SuccessAnimation from './animations/SuccessAnimation.json';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);

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
      <Text variant="title" tag="h1" color="tertiary.main">
        Pronto para saber da vida dos outros?
      </Text>

      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
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
        />
      </div>
      <div>
        <TextField
          name="username"
          placeholder="Username"
          value={userInfo.username}
          onChange={handleChange}
        />
      </div>
      <Button
        type="submit"
        variant="primary.main"
        disabled={isfomInvalid}
        fullWidth
      >
        Cadastrar
      </Button>

      {isFormSubmited && submissionStatus === formStates.DONE && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            config={{ animationData: SuccessAnimation, loop: true, autoplay: true }}
          />
        </Box>
      )}
      {isFormSubmited && submissionStatus === formStates.LOADING && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            config={{ animationData: LoadingAnimation, loop: true, autoplay: true }}
          />
        </Box>
      )}
      {isFormSubmited && submissionStatus === formStates.ERROR && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            config={{ animationData: ErrorAnimation, loop: true, autoplay: true }}
          />
        </Box>
      )}
    </form>
  );
}

// eslint-disable-next-line react/prop-types
export default function FormCadastro({ onClose, propsModal }) {
  return (
    <Grid.Row marginLeft={0} marginRight={0} flex={1} justifyContent="flex-end">
      <Grid.Col
        display="flex"
        flexDirection="row-reverse"
        backgroundColor="white"
        paddingRight={{ md: '0' }}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <CloseModal
          onClick={() => {
            onClose();
          }}
        />
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsModal}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
