import styled from "styled-components";
import { OncoLightGreen, OncoWhite } from "../../theme";
import { FragmentType, gql, useFragment } from "../../gql";
import { FaCircle } from "react-icons/fa6";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 0px;

  align-items: start;
  min-height: 75px;
  margin: 5px;
  padding: 15px;
  background-color: ${OncoLightGreen};
  border: solid 1px grey;
  border-radius: 20px;
  cursor: pointer;
  transition: 1000ms all;

  &:hover {
    transition: 300ms all;
    background-color: ${OncoWhite};
  }

  &:active {
    transition: 100ms all;
    background-color: white;
  }
`;

const Section = styled.div`
  margin-right: 15px;
`;

const Title = styled.h1`
  margin-bottom: 5px;
`;

const StatusContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 12px;
    height: auto;
    fill: ${({ color }) => color};
    margin-right: 3px;
  }
`;

const Text = styled.p`
  font-size: 14px;
`;

const fragment = gql(/* GraphQL */ `
  fragment MachineforMachines on Machine {
    id
    name
  }
`);

interface Props {
  machine: FragmentType<typeof fragment>;
}
const statuses = ["Working", "Maintenance", "Failure"];

export function Machine({ machine }: Props) {
  const machineFragment = useFragment(fragment, machine);
  const status = statuses[Math.floor(Math.random() * 3)];
  let color;
  switch (status) {
    case "Working":
      color = "green";
      break;
    case "Maintenance":
      color = "yellow";
      break;
    case "Failure":
      color = "red";
      break;
    default:
      color = "black";
  }

  return (
    <Container>
      <Section>
        <Title>Name</Title>
        <Text>{machineFragment.name}</Text>
      </Section>
      <Section>
        <Title>Status</Title>
        <StatusContainer color={color}>
          <FaCircle />
          <Text>{status}</Text>
        </StatusContainer>
      </Section>
    </Container>
  );
}
