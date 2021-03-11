import React from 'react';
import Text from '../src/components/foundation/Text';
import Grid from '../src/components/foundation/layout/Grid';
import Button from '../src/components/commons/Button';

export default function Page404() {
  return (
    <Grid.Container>
      <Grid.Row>
        <Grid.Col
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <Text
            tag="h1"
            variant="title"
            color="tertiary.main"
          >
            Sobre
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
  );
}
