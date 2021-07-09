/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { get } from 'lodash';
import Text from '../../foundation/Text';
import Grid from '../../foundation/layout/Grid';
import Box from '../../foundation/layout/Box';
import { WebPageContext } from '../../wrappers/WebPage/context';

export { getContent } from './getContent';
const BoxStyle = styled(Box)`
  & p {
    color: ${({ theme, mode }) => get(theme, `${mode}.tertiary.light.color`)}
  }
`;
export default function AboutScreen({ messages }) {
  const webPageContext = React.useContext(WebPageContext);
  return (
    <Box
      display="flex"
      flexDirection="column"
      flex={1}
    >
      <Grid.Container>
        <Grid.Row
          marginTop={{ xs: '32px', md: '120px' }}
          flex="1"
        >
          <Grid.Col
            value={{ xs: 12, md: 6, lg: 6 }}
            offset={{ md: 2 }}
            flex={1}
          >
            <Text
              variant="title"
              tag="h2"
              color="tertiary.main"
              csmkey="pageSobre.sobreTitle"
              mode={webPageContext.mode}
            />
            <BoxStyle
              dangerouslySetInnerHTML={{
                __html: messages.pageSobre.sobreDescription,
              }}
              mode={webPageContext.mode}
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}

AboutScreen.propTypes = {
  messages: PropTypes.object.isRequired,
};
