import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";

const client = new ApolloClient({
  link: ApolloLink.from([
    new HttpLink({
      uri: "https://cricket-cards-materialui-graphql.vercel.app/api/graphql",
    }),
  ]),
  cache: new InMemoryCache(),
});

export default client;
