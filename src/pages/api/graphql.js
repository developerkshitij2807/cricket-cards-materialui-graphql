import { gql, ApolloServer } from "apollo-server-micro";
import { connectDB } from "../../utils/connectDB";

const typeDefs = gql`
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

const resolvers = {
  Query: {
    testQuery: () => {
      return { name: "Next JS", id: "101" };
    },
  },
  Mutation: {
    testMutation: (_parent, { name, id }, _context) => {
      return { name, id };
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = apolloServer.start();

export default async function handler(req, res) {
  await connectDB();
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
