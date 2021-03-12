import React from 'react';
import Button from '../commons/Button';
import Box from '../foundation/layout/Box';
import Grid from '../foundation/layout/Grid';
import Text from '../foundation/Text';

export default function LoginScreen() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      flex="1"
    >
      <Grid.Container>
        <Grid.Row>
          <Grid.Col
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Text
              tag="h1"
              variant="title"
              color="tertiary.main"
            >
              Login - Pagina ainda em construção
            </Text>
            <Button
              variant="primary.main"
              href="/"
            >
              Voltar
            </Button>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}
