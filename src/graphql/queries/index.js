import { gql } from "@apollo/client";
const TEST_QUERY = gql`
  query {
    testQuery {
      name
      id
    }
  }
`;

export default TEST_QUERY;
