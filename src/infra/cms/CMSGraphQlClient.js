import { GraphQLClient, gql as GraphqlTag } from 'graphql-request';

export const gql = GraphqlTag;
export default function CMSGraphQlClient({ preview = false }) {
  const DatoCMSURL = preview ? 'https://graphql.datocms.com/preview' : 'https://graphql.datocms.com/';
  const TOKEN = process.env.DATO_CMS_TOKEN;
  const client = new GraphQLClient(DatoCMSURL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  return {
    async query(query) {
      const messages = await client.request(query);
      return {
        data: {
          messages,
        },
      };
    },
  };
}
