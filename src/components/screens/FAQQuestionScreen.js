import React from 'react';
import PropTypes from 'prop-types';
import Box from '../foundation/layout/Box';
import Grid from '../foundation/layout/Grid';
import Text from '../foundation/Text';
import { WebPageContext } from '../wrappers/WebPage/context';

export default function FAQQuestionScreen({ category, question }) {
  const webPageContext = React.useContext(WebPageContext);

  return (
    <Grid.Container
      flex="1"
      marginTop={{
        xs: '32px',
        md: '80px',
      }}
    >
      <Grid.Row
        flexDirection={{
          xs: 'column-reverse',
          md: 'row',
        }}
      >
        <Grid.Col offset={{ sm: 0, lg: 1 }} value={{ xs: 12, md: 4, lg: 4 }}>
          <Text variant="title" color="tertiary.main" marginBottom="25px" mode={webPageContext.mode}>
            Artigos
            <br />
            Relacionados
          </Text>
          <Box
            as="ul"
            listStyle="none"
            padding="24px 30px"
            backgroundColor="background.main"
            borderRadiusTheme
            mode={webPageContext.mode}
          >
            {category.questions.map((currentQuestion) => (
              <Text
                key={currentQuestion.slug}
                as="li"
                variant="paragraph2"
                href={`/${currentQuestion.slug}`}
                color="primary.main"
                marginBottom="16px"
                mode={webPageContext.mode}
              >
                {currentQuestion.title}
              </Text>
            ))}
          </Box>
        </Grid.Col>

        <Grid.Col
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          value={{ lg: 6 }}
          marginBottom={{
            xs: '50px',
            md: '0',
          }}
        >
          <div>
            <Text variant="paragraph2" color="tertiary.light" href="/faq" mode={webPageContext.mode}>
              {'Perguntas frequentes >'}
            </Text>
            <Text variant="paragraph2" color="primary.main" style={{ paddingLeft: '4px' }} mode={webPageContext.mode}>
              {question.title}
            </Text>
          </div>
          <Text variant="title" style={{ paddingTop: '16px' }} color="tertiary.main" mode={webPageContext.mode}>
            {question.title}
          </Text>
          <Text
            as="p"
            variant="paragraph1"
            color="tertiary.light"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: question.description }}
            mode={webPageContext.mode}
          />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}

FAQQuestionScreen.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string,
    questions: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
      }),
    ),
  }).isRequired,
  question: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
