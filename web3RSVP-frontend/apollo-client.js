import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.studio.thegraph.com/query/55877/rsvp/version/latest",
  cache: new InMemoryCache(),
});

export default client;