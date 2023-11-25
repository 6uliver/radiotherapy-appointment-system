import styled from "styled-components";
import "./reset.css";
import "./index.css";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Scheduler } from "./components/Scheduler/Scheduler";
import { Profile } from "./components/Profile";
import { Settings } from "./components/Settings";
import { Home } from "./components/Home";
import { TreatmentPlans } from "./components/Treatment Plans/TreatmentsPlans";
import { Machines } from "./components/Machines/Machines";

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      pollInterval: 10000,
    },
  },
});

export function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path="scheduler" element={<Scheduler />} />
              <Route path="treatments" element={<TreatmentPlans />} />
              <Route path="machines" element={<Machines />} />
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </PageWrapper>
      </ApolloProvider>
    </BrowserRouter>
  );
}
