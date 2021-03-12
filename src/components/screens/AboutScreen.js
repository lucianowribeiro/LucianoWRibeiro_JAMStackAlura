import React from 'react';
import Text from '../foundation/Text';
import Grid from '../foundation/layout/Grid';
import Button from '../commons/Button';
import Box from '../foundation/layout/Box';

export default function AboutScreen() {
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
              Sobre - Pagina ainda em construção
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
