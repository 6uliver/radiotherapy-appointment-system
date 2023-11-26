import styled from "styled-components";
import { ResultElement } from "./ResultElement";
import { FragmentType, gql, useFragment } from "../../gql";

const Container = styled.div``;

const ResultCount = styled.h2`
  margin: 15px 0 5px 0;
`;

const fragment = gql(/* GraphQL */ `
  fragment TreatmentPlanForList on TreatmentPlan {
    id
    ...TreatmentPlanForResultElement
  }
`);

interface Props {
  treatmentPlans: FragmentType<typeof fragment>[];
}

export function ResultList({ treatmentPlans }: Props) {
  const treatmentPlansFragment = useFragment(fragment, treatmentPlans);

  return (
    <>
      <ResultCount>{treatmentPlansFragment.length} results found</ResultCount>
      <Container>
        {treatmentPlansFragment.map((treatmentPlan) => (
          <ResultElement key={treatmentPlan.id} treatmentPlan={treatmentPlan} />
        ))}
      </Container>
    </>
  );
}
