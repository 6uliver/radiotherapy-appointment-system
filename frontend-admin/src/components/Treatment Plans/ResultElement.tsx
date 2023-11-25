import styled from "styled-components";
import { OncoLightGreen, OncoWhite } from "../../theme";
import { FragmentType, gql, useFragment } from "../../gql";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 15em);
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

const Text = styled.p`
  font-size: 14px;
`;

const fragment = gql(/* GraphQL */ `
  fragment TreatmentPlanForResultElement on TreatmentPlan {
    id
    fractionCount
    fractionMinutes
    patient {
      id
      firstName
      lastName
      ssn
    }
  }
`);

interface Props {
  treatmentPlan: FragmentType<typeof fragment>;
}

export function ResultElement({ treatmentPlan }: Props) {
  const treatmentPlanFragment = useFragment(fragment, treatmentPlan);

  return (
    <Container>
      <Section>
        <Title>Name</Title>
        <Text>
          {treatmentPlanFragment.patient.firstName}{" "}
          {treatmentPlanFragment.patient.lastName}
        </Text>
      </Section>
      <Section>
        <Title>SSN Number</Title>
        <Text>{`${treatmentPlanFragment.patient.ssn} `}</Text>
      </Section>
      <Section>
        <Title>Treatment Plan</Title>
        <Text>
          {treatmentPlanFragment.fractionCount} x{" "}
          {treatmentPlanFragment.fractionMinutes} minutes
        </Text>
      </Section>
    </Container>
  );
}
