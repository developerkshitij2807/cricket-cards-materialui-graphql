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

const UPDATE_PLAYER = gql`
  mutation UpdatePlayerMutation(
    $_id: String
    $name: String
    $age: String
    $team: String
    $matches: String
    $photoUrl: String
  ) {
    updatePlayerMutation(
      _id: $_id
      name: $name
      age: $age
      team: $team
      matches: $matches
      photoUrl: $photoUrl
    ) {
      _id
      photoUrl
      name
      age
      team
      matches
    }
  }
`;

const DELETE_PLAYER = gql`
  mutation DeletePlayerMutation($_id: String) {
    deletePlayerMutation(_id: $_id) {
      message
      isDeleted
    }
  }
`;

export { CREATE_PLAYER, UPDATE_PLAYER, DELETE_PLAYER };
