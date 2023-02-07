import { ApolloServer } from "apollo-server-micro";
import { connectDB } from "../../utils/connectDB";
import typeDefs from "../../graphql/schema";
import resolvers from "../../graphql/resolvers";
import { buildSubgraphSchema } from "@apollo/subgraph";

const apolloServer = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
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
