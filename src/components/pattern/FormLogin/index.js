import React from 'react';
import { Lottie } from '@crello/react-lottie';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import Button from '../../commons/Button';
import TextField from '../../forms/TextField';
import Box from '../../foundation/layout/Box';
import useForm from '../../../infra/hooks/form/UseForm';
import loginService from '../../../services/login/loginService';
import Text from '../../foundation/Text';
import ErrorAnimation from '../animations/ErrorAnimation.json';
import LoadingAnimation from '../animations/LoadingAnimation.json';

const loginSchema = yup.object().shape({
  usuario: yup
    .string()
    .required('"Usuario" é obrigatório')
    .min(3, 'Preencha ao menos 3 caracteres'),
  senha: yup
    .string()
    .required('"Senha" é obrigatória')
    .min(8, 'Sua senha precisa ter ao menos 8 caracteres'),
});

export default function FormLogin({ onSubmit }) {
  const router = useRouter();
  const initialValues = {
    usuario: '',
    senha: '',
  };
  const loginStatus = {
    LOADING: 'LOADING',
    ERROR: 'ERROR',
  };
  const [loginErrorSubmit, setloginErrorSubmit] = React.useState('');
  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      setloginErrorSubmit(loginStatus.LOADING);
      form.setIsFormDisabled(true);
      loginService.login({
        username: values.usuario, // 'omariosouto'
        password: values.senha, // 'senhasegura'
      })
        .then(() => {
          router.push('/app/profile');
        })
        .catch(() => {
          // Desafio: Mostrar o erro na tela
          setloginErrorSubmit(loginStatus.ERROR);
        })
        .finally(() => {
          form.setIsFormDisabled(false);
        });
    },
    async validateSchema(values) {
      return loginSchema.validate(values, {
        abortEarly: false,
      });
    },
  });

  return (
    <form id="formCadastro" onSubmit={onSubmit || form.handleSubmit}>
      <TextField
        placeholder="Usuário"
        name="usuario"
        value={form.values.usuario}
        error={form.errors.usuario}
        isTouched={form.touched.usuario}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />
      <TextField
        placeholder="Senha"
        name="senha"
        type="password"
        value={form.values.senha}
        error={form.errors.senha}
        isTouched={form.touched.senha}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />

      <Button
        type="submit"
        variant="primary.main"
        margin={{
          xs: '0 auto',
          md: 'initial',
        }}
        fullWidth
        disabled={form.isFormDisabled}
      >
        Entrar
      </Button>
      <Text
        tag="span"
        variant="smallestException"
        color="error.main"
        role="alert"
      >
        {loginErrorSubmit === loginStatus.ERROR && (
        <Box
          display="flex"
          flexDirection="column-reverse"
          alignItems="center"
        >
          <Lottie
            width="100px"
            height="100px"
            config={{ animationData: ErrorAnimation, loop: true, autoplay: true }}
          />
          <Text
            variant="smallestException"
            color="error.main"
            role="alert"
          >
            Por favor prenche com valores validos!
          </Text>
        </Box>
        )}
        {loginErrorSubmit === loginStatus.LOADING && (
        <Box
          display="flex"
          flexDirection="column-reverse"
          alignItems="center"
        >
          <Lottie
            width="100px"
            height="100px"
            config={{ animationData: LoadingAnimation, loop: true, autoplay: true }}
          />
          <Text
            variant="smallestException"
            color="success.main"
            role="alert"
          >
            LOADING ...
          </Text>
        </Box>
        )}
      </Text>
    </form>
  );
}
FormLogin.defaultProps = {
  onSubmit: undefined,
};

FormLogin.propTypes = {
  onSubmit: PropTypes.func,
};
