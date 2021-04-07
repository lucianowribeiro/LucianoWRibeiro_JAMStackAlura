import CMSGraphQlClient, { gql } from '../../../infra/cms/CMSGraphQlClient';

// eslint-disable-next-line import/prefer-default-export
export async function getContent() {
  const query = gql`
  query {
    pageSobre {
      pageTitle
      pageDescription
    }
  }
  `;

  const client = CMSGraphQlClient();
  const response = await client.query(query);

  return response.data.messages;
}
