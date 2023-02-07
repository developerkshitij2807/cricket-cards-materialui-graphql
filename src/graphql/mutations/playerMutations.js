import { gql } from "@apollo/client";

const CREATE_PLAYER = gql`
  mutation CreatePlayerMutation(
    $photoUrl: String
    $name: String
    $age: String
    $team: String
    $matches: String
  ) {
    createPlayerMutation(
      photoUrl: $photoUrl
      name: $name
      age: $age
      team: $team
      matches: $matches
    ) {
      photoUrl
      name
      age
      team
      matches
    }
  }
`;

export default CREATE_PLAYER;
