import styled from "styled-components";
import { OncoLightGreen, OncoWhite } from "../../theme";
import { FragmentType, gql, useFragment } from "../../gql";

const Container = styled.div`
  display: flex;
  align-items: center;
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

const Name = styled.h1``;

const SSNNumber = styled.h1``;

const fragment = gql(/* GraphQL */ `
  fragment TreatmentPlanForResultElement on TreatmentPlan {
    id
    fractionCount
    fractionMinutes
    patient {
      id
      firstName
      lastName
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
      <Name>
        {treatmentPlanFragment.patient.firstName}{" "}
        {treatmentPlanFragment.patient.lastName}
      </Name>
      <SSNNumber>123123123</SSNNumber>
      {treatmentPlanFragment.id} - {treatmentPlanFragment.fractionMinutes} -{" "}
    </Container>
  );
}
