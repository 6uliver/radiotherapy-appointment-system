import { UserList } from "./UserList";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

export function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>OncoSync</h1>
        <UserList />
      </div>
    </ApolloProvider>
  );
}
