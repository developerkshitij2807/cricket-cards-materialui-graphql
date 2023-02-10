import { gql } from "@apollo/client";

const GET_PLAYERS = gql`
  query {
    getPlayers {
      photoUrl
      name
      age
      team
      matches
    }
  }
`;

export { GET_PLAYERS };
