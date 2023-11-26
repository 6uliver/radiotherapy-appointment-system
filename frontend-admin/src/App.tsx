import styled from "styled-components";
import "./reset.css";
import "./index.css";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Scheduler } from "./components/Scheduler/Scheduler";
import { Home } from "./components/Home";
import { TreatmentPlans } from "./components/Treatment Plans/TreatmentPlans";
import { Machines } from "./components/Machines/Machines";
import { PlanPage } from "./components/Treatment Plans/PlanPage";
import { MachinePage } from "./components/Machines/MachinePage";

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
              <Route path="treatment-plans" element={<TreatmentPlans />} />
              <Route path="machines" element={<Machines />} />
              <Route path="treatment-plans/:id" element={<PlanPage />} />
              <Route path="machines/:id" element={<MachinePage />} />
            </Route>
          </Routes>
        </PageWrapper>
      </ApolloProvider>
    </BrowserRouter>
  );
}
