import styled from "styled-components";
import "./reset.css";
import "./index.css";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Appointments } from "./components/Appointments";
import { Profile } from "./components/Profile";
import { Settings } from "./components/Settings";
import { Home } from "./components/Home";

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
    <BrowserRouter>
      <ApolloProvider client={client}>
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path="appointments" element={<Appointments />} />
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </PageWrapper>
      </ApolloProvider>
    </BrowserRouter>
  );
}
