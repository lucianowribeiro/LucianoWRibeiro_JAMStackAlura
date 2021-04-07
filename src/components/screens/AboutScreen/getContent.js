import CMSGraphQlClient, { gql } from '../../../infra/cms/CMSGraphQlClient';

// eslint-disable-next-line import/prefer-default-export
export async function getContent({ preview }) {
  const query = gql`
  query {
    pageSobre{
      sobreTitle,
      sobreDescription,
    }
  }
  `;

  const client = CMSGraphQlClient({ preview });
  const response = await client.query(query);

  return response.data.messages;
}
