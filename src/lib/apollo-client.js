import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";

const client = new ApolloClient({
  link: ApolloLink.from([
    new HttpLink({
      uri: [
        "/api/graphql",
        "https://cricket-cards-materialui-graphql.vercel.app",
      ],
    }),
  ]),
  cache: new InMemoryCache(),
});

export default client;
