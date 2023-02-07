import { gql } from "apollo-server-micro";

const TestSchema = gql`
  type Test {
    name: String
    id: String
  }
  type Query {
    testQuery: Test
  }

  type Mutation {
    testMutation(name: String, id: String): Test
  }
`;

export default TestSchema;
