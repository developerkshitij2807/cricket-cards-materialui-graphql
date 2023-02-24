import { store, wrapper } from "@/redux/store";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import client from "../lib/apollo-client";

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  );
}

export default wrapper.withRedux(App);
