import { gql } from "graphql-request";

export default gql`
  query GetProductsByID($ids: [ID!]) {
    products(where: { id_in: $ids }) {
      id
      name
      price
      slug
    }
  }
`;
