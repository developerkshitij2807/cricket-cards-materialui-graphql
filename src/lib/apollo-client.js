import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";

const linkHttp = new HttpLink({
  uri: '/api/graphql',
  headers: {
      accept: 'application/json',
      'Content-Type': 'application/json'
  },
  useGETForQueries: false
})


const client = new ApolloClient({
  link: linkHttp,
  cache: new InMemoryCache(),
});

export default client;
