import { useQuery } from "@apollo/client";
import { gql } from "../../gql";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { OncoLightGreen } from "../../theme";

const machines = gql(/* GraphQL */ `
  query MachinesForMachineSelector {
    machines {
      id
      name
    }
  }
`);

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.div<{ selected: boolean }>`
  background-color: ${(props) => (props.selected ? OncoLightGreen : "#fff")};
  border: 1px solid ${OncoLightGreen};
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
`;

interface Props {
  machineId: string | null;
  onMachineSelected: (machineId: string | null) => void;
}

export function MachineSelector({ machineId, onMachineSelected }: Props) {
  const machinesQuery = useQuery(machines);

  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (machinesQuery.data?.machines && !initialized) {
      console.log("On inmit", machinesQuery.data.machines[0].id);
      onMachineSelected(machinesQuery.data.machines[0].id);
      setInitialized(true);
    }
  }, [initialized, machinesQuery.data?.machines, onMachineSelected]);

  return (
    <Wrapper>
      {machinesQuery.data?.machines.map((machine) => (
        <Button
          key={machine.id}
          selected={machine.id === machineId}
          onClick={() => onMachineSelected(machine.id)}
        >
          {machine.name}
        </Button>
      ))}
    </Wrapper>
  );
}
