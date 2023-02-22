import { gql } from "apollo-server-micro";

const PlayerSchema = gql`
  type Player {
    _id: String
    photoUrl: String
    name: String
    age: String
    team: String
    matches: String
  }

  type Result {
    message: String
    isDeleted: Boolean
  }

  type Query {
    getPlayers: [Player]
  }

  type Mutation {
    createPlayerMutation(
      photoUrl: String
      name: String
      age: String
      team: String
      matches: String
    ): Player

    updatePlayerMutation(
      _id: String
      photoUrl: String
      name: String
      age: String
      team: String
      matches: String
    ): Player

    deletePlayerMutation(_id: String): Result
  }
`;

export default PlayerSchema;
