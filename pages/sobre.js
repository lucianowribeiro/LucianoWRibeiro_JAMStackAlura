import { GraphQLClient, gql } from 'graphql-request';
import AboutScreen from '../src/components/screens/AboutScreen';
import webPageHOC from '../src/components/wrappers/WebPage/hoc';

export async function getStaticProps() {
  const TOKEN = '4aab00ab314cc37b5adec40c740c86';
  const DatoCMSURL = 'https://graphql.datocms.com/';

  const client = new GraphQLClient(DatoCMSURL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  const query = gql`
    query {
      pageSobre {
        sobreTitle,
        sobreDescription,
      }
    }
  `;

  const messages = await client.request(query);

  return {
    props: {
      messages,
    },
  };
}

export default webPageHOC(AboutScreen, {
  pageProps: {
    seoProps: {
      headTitle: 'About',
    },
  },
});

