import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";

const client = new ApolloClient({
  link: ApolloLink.from([new HttpLink({ uri: "http://localhost:3000/api/graphql" })]),
  cache: new InMemoryCache(),
});

export default client;
