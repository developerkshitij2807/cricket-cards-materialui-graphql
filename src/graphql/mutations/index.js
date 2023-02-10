import { gql } from "@apollo/client";

const TEST_MUTATION = gql`
  mutation TestMutation($name: String, $id: String) {
    testMutation(name: $name, id: $id) {
      name
      id
    }
  }
`;

export { TEST_MUTATION };
