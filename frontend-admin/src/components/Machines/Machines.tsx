import styled from "styled-components";

import { PageBase } from "../PageBase";
import { Machine } from "./Machine";
import { useQuery } from "@apollo/client";
import { gql } from "../../gql";

const Container = styled.div``;

const ResultCount = styled.h2`
  margin: 15px 0 5px 0;
`;

const machines = gql(/* GraphQL */ `
  query machines {
    machines {
      id
      ...MachineforMachines
    }
  }
`);

export function Machines() {
  const machinesQuery = useQuery(machines);

  return (
    <PageBase title="Machines">
      {machinesQuery.data && (
        <>
          <ResultCount>
            {machinesQuery.data.machines.length} machines
          </ResultCount>
          <Container>
            {machinesQuery.data.machines.map((machine) => (
              <Machine key={machine.id} machine={machine} />
            ))}
          </Container>
        </>
      )}
    </PageBase>
  );
}
