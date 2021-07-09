/* eslint-disable dot-notation */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import { LoggedPageContext } from '../../wrappers/LoggedPage';
import Menu from '../../logged/Menu';
import PostCombo from '../../logged/PostCombo';
import UserDetail from '../../logged/UserDetail';
import UserAvatar from '../../../theme/UserAvatar';
import Box from '../../foundation/layout/Box';
import FeedUserImage from '../../logged/FeedUserImage';

export default function ProfileScreen() {
  const webLogged = React.useContext(LoggedPageContext);
  return (
    <>
      <Menu mode={webLogged.mode} switchTheme={webLogged.switchTheme} />
      {webLogged.isFeed && (
        <Grid.Container as="main">
          <Grid.Row as="article">
            <Grid.Col
              value={{ xs: 12, sm: 12, md: 6 }}
              as="section"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems={{ xs: 'center', md: 'flex-end' }}
              marginTop={{ xs: '50px', md: '0' }}
            >
              <Text tag="h1" variant="title" color="tertiary.main" mode={webLogged.mode}>
                <UserAvatar size="biggest" />
              </Text>
            </Grid.Col>
            <Grid.Col
              as="section"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems={{ xs: 'center', md: 'flex-start' }}
              marginLeft={{ xs: 'initial', md: '5%' }}
            >
              <Box marginBottom="16px" textAlign={{ xs: 'center', md: 'left' }}>
                <Text
                  tag="h3"
                  variant="paragraph1"
                  style={{
                    fontWeight: '500',
                    margin: '0',
                    marginBottom: '8px',
                  }}
                  color="tertiary.main"
                  mode={webLogged.mode}
                >
                  {webLogged.profile.posts.length}
                </Text>
                <Text
                  tag="h3"
                  variant="paragraph1"
                  color="tertiary.light"
                  style={{ margin: '0' }}
                  mode={webLogged.mode}
                >
                  Publicacoes
                </Text>
              </Box>
              <Box
                textAlign={{ xs: 'center', md: 'left' }}
                width={{ xs: 'initial ', md: '70%' }}
              >
                <Text
                  tag="h3"
                  variant="paragraph1"
                  style={{
                    fontWeight: '500',
                    margin: '0',
                    marginBottom: '8px',
                  }}
                  color="tertiary.main"
                  mode={webLogged.mode}
                >
                  {webLogged.profile.user.name}
                </Text>
                <Text
                  tag="h3"
                  variant="paragraph1"
                  color="tertiary.light"
                  style={{ margin: '0' }}
                  mode={webLogged.mode}
                >
                  A simple person that like to do simple things ...
                </Text>
              </Box>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row as="article">
            <Grid.Col
              as="section"
              marginTop="2rem"
              marginBottom="2rem"
              padding="initial"
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
            >
              {webLogged.profile.posts.map((post) => (
                <FeedUserImage
                  key={post['_id']}
                  id={post['_id']}
                  src={post.photoUrl}
                  className={`filter-${post.filter}`}
                  alt="posts user feed"
                  likes={post.likes}
                />
              ))}
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      )}
      {!webLogged.isFeed && (
        <Grid.Container as="main">
          <Grid.Row as="article">
            <Grid.Col
              as="section"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              marginTop={{ xs: '40px', md: '0' }}
            >
              {webLogged.profile.posts.map((post) => (
                <PostCombo
                  key={post['_id']}
                  filter={post.filter}
                  url={post.photoUrl}
                  likes={post.likes}
                  description={post.description}
                />
              ))}
            </Grid.Col>
            <Grid.Col as="section">
              <UserDetail
                username={webLogged.profile.user.username}
                name={webLogged.profile.user.name}
                spacing="big"
                size="big"
              />
              <Text
                tag="h2"
                variant="paragraph1"
                color="tertiary.light"
                style={{ paddingLeft: '55px', fontWeight: '500' }}
                mode={webLogged.mode}
              >
                Projetos da galera
              </Text>
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
                src="https://ocdn.eu/images/pulscms/Mjc7MDA_/e2340fc4d1c27ba063115973a477ef87.jpeg"
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
