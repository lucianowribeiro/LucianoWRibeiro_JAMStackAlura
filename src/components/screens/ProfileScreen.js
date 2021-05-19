/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Grid from '../foundation/layout/Grid';
import Text from '../foundation/Text';
import { LoggedPageContext } from '../wrappers/LoggedPage';
import Menu from '../logged/Menu';
import PostCombo from '../logged/PostCombo';
import UserDetail from '../logged/UserDetail';
import Box from '../foundation/layout/Box';

export default function ProfileScreen() {
  const webLogged = React.useContext(LoggedPageContext);
  return (
    <>
      <Menu />
      {webLogged.isUserPerfil && (
        <Grid.Container>
          <Grid.Row>
            <Grid.Col
              as="section"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Text tag="h1" variant="title" color="tertiary.main">
                {webLogged.profile.user.username}
              </Text>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      )}
      {!webLogged.isUserPerfil && (
        <Grid.Container>
          <Grid.Row>
            <Grid.Col
              as="section"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              marginTop={{ xs: '40px', md: '0' }}
            >
              <PostCombo />
              <PostCombo />
              <PostCombo />
            </Grid.Col>
            <Grid.Col as="section">
              <UserDetail
                username={webLogged.profile.user.username}
                name={webLogged.profile.user.name}
                spacing="big"
                size="big"
              />
              <Box paddingLeft="55px">
                <Text tag="h2" variant="paragraph1" color="tertiary.light" style={{ fontWeight: '500' }}>
                  Projetos da galera
                </Text>
              </Box>
              <UserDetail
                username="john_cena"
                name="IT’S JOHN CENA"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLKybvXmdnFY15zYfKKEHh1DxA0USfX8vw85Eu6f34E1rDIciMTjX5PQsOaa61HIXIzuY&usqp=CAU"
                spacing="small"
                size="medium"
              />
              <UserDetail
                username="leeroy.jenkins"
                name="Leeroy Jenkins Official"
                src="https://www.selectgame.com.br/wp-content/uploads/2017/12/Leeroy-Jenkins-Carta-de-Hearthstone-Art.jpg"
                spacing="small"
                size="medium"
              />
              <UserDetail
                username="gauchoronaldinho"
                name="Ronaldin Gaúcho"
                src="https://extra.globo.com/incoming/24287426-475-b4d/w976h550-PROP/ronaldinho-gaucho-2.jpg"
                spacing="small"
                size="medium"
              />
              <UserDetail
                username="wally"
                name="this time it was easy"
                src="https://vejasp.abril.com.br/wp-content/uploads/2019/07/wally.png?w=900"
                spacing="small"
                size="medium"
              />
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      )}
    </>
  );
}
