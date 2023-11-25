import styled from "styled-components";
import "./reset.css";

import "./index.css";

import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { PageBase } from "./components/PageBase";
import { UserList } from "./UserList";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

export function App() {
  return (
    <ApolloProvider client={client}>
      <PageWrapper>
        <Header />
        <NavBar />
        <PageBase title="Profile">
          <UserList />
        </PageBase>
      </PageWrapper>
    </ApolloProvider>
  );
}
