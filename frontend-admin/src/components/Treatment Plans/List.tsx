import styled from "styled-components";
import { FragmentType, gql, useFragment } from "../../gql";

const Container = styled.div`
  margin-top: 15px;
  border: 1px solid black;
  background-color: white;
`;

const fragment = gql(/* GraphQL */ `
  fragment TreatmentPlanForList on TreatmentPlan {
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
  treatmentPlans: FragmentType<typeof fragment>[];
}

export function List({ treatmentPlans }: Props) {
  const treatmentPlansFragment = useFragment(fragment, treatmentPlans);
  return (
    <Container>
      <h1>Results</h1>
      <div>
        {treatmentPlansFragment.map((treatmentPlan) => (
          <div key={treatmentPlan.id}>
            {treatmentPlan.id} - {treatmentPlan.fractionMinutes} -{" "}
            {treatmentPlan.patient.firstName} {treatmentPlan.patient.lastName}
          </div>
        ))}
      </div>
    </Container>
  );
}
