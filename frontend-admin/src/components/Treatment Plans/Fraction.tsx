import styled from "styled-components";
import { OncoLightGreen, OncoWhite } from "../../theme";
import { FragmentType, gql, useFragment } from "../../gql";
import { format } from "date-fns";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  align-items: start;
  min-height: 75px;
  margin-bottom: 3px;
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

const Section = styled.div``;

const Title = styled.h1`
  margin-bottom: 5px;
  font-size: 14px;
  color: #282828;
`;

const Text = styled.p``;

const fragment = gql(/* GraphQL */ `
  fragment FractionForFractions on Fraction {
    id
    start
    end
    machine {
      id
      name
    }
  }
`);

interface Props {
  fraction: FragmentType<typeof fragment>;
}

export function Fraction({ fraction }: Props) {
  const fractionFragment = useFragment(fragment, fraction);
  const { start, end, machine } = fractionFragment;

  return (
    <Container>
      <Section>
        <Title>Machine</Title>
        <Text>{machine.name}</Text>
      </Section>
      <Section>
        <Title>Date</Title>
        <Text>{format(start, "PP")}</Text>
      </Section>
      <Section>
        <Title>Start</Title>
        <Text>{format(start, "p")}</Text>
      </Section>
      <Section>
        <Title>End</Title>
        <Text>{format(end, "p")}</Text>
      </Section>
    </Container>
  );
}
