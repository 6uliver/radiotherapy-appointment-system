import { useQuery } from "@apollo/client";
import { gql } from "../../gql";

const machines = gql(/* GraphQL */ `
  query MachinesForMachineSelector {
    machines {
      id
      name
    }
  }
`);

interface Props {
  onMachineSelected: (machineId: string | null) => void;
}

export function MachineSelector({ onMachineSelected }: Props) {
  const machinesQuery = useQuery(machines);

  return (
    <div>
      <select onChange={(e) => onMachineSelected(e.target.value || null)}>
        <option value="">Select a machine</option>
        {machinesQuery.data?.machines.map((machine) => (
          <option key={machine.id} value={machine.id}>
            {machine.name}
          </option>
        ))}
      </select>
    </div>
  );
}
