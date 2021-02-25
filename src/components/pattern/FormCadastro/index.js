/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Button from '../../commons/Button';
import Grid from '../../foundation/layout/Grid';
import Box from '../../foundation/layout/Box';
import TextField from '../../forms/TextField';
import Text from '../../foundation/Text';
import CloseModal from '../../../theme/CloseModal';

function FormContent() {
  const [userInfo, setUserInfo] = React.useState({
    user: '',
    email: '',
  });
  function handleChange(event) {
    const nameField = event.target.getAttribute('name');
    const valueField = event.target.value;
    setUserInfo({
      ...userInfo,
      [nameField]: valueField,
    });
  }
  const isfomInvalid = userInfo.user.length === 0 || userInfo.email.length === 0;
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
      >
        Pronto para saber da vida dos outros?
      </Text>

      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber tudoo que está
        rolando no bairro, complete seu cadastro agora!
      </Text>
      <div>
        <TextField
          name="user"
          placeholder="Name"
          value={userInfo.user}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          name="email"
          placeholder="Email"
          value={userInfo.email}
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
    </form>
  );
}

// eslint-disable-next-line react/prop-types
export default function FormCadastro({ onClose, propsModal }) {
  return (

    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="flex-end"
    >
      <Grid.Col
        display="flex"
        flexDirection="row-reverse"
        backgroundColor="white"
        paddingRight={{ md: '0' }}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <CloseModal onClick={() => {
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
