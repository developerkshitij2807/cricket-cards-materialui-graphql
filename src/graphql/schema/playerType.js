import { gql } from "apollo-server-micro";

const PlayerSchema = gql`
  type Player {
    photoUrl: String
    name: String
    age: String
    team: String
    matches: String
  }

  type Query {
    getPlayers: [Player]
  }

  type Mutation {
    createPlayer(
      photoUrl: String
      name: String
      age: String
      team: String
      matches: String
    ): Player
  }
`;

export default PlayerSchema;
