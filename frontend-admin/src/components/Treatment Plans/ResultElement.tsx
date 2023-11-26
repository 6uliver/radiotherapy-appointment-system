import styled from "styled-components";
import { OncoLightGreen, OncoWhite } from "../../theme";
import { FragmentType, gql, useFragment } from "../../gql";
import { format } from "date-fns";
import { Constraints } from "./Constraints";
import { useNavigate } from "react-router-dom";
import { formatRegion, formatSSN, getTpn } from "../../utilities/functions";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
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
  font-size: 14px;
  color: #282828;
`;

const Text = styled.p``;

const fragment = gql(/* GraphQL */ `
  fragment TreatmentPlanForResultElement on TreatmentPlan {
    id
    fractionCount
    fractionMinutes
    region
    constraints {
      inpatient
      breathHolding
      largeBodied
      kvImaging
    }
    patient {
      id
      dateOfBirth
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
  const navigate = useNavigate();
  const treatmentPlanFragment = useFragment(fragment, treatmentPlan);
  const { id, region, patient, fractionCount, fractionMinutes, constraints } =
    treatmentPlanFragment;
  const { dateOfBirth, firstName, lastName, ssn } = patient;

  return (
    <Container onClick={() => navigate(`/treatment-plans/${id}`)}>
      <Section>
        <Title>Name</Title>
        <Text>
          {firstName} {lastName}
        </Text>
      </Section>
      <Section>
        <Title>TPN</Title>
        <Text>{getTpn(id)}</Text>
      </Section>
      <Section>
        <Title>SSN Number</Title>
        <Text>{formatSSN(ssn)}</Text>
      </Section>
      <Section>
        <Title>Date of Birth</Title>
        <Text>{format(dateOfBirth, "PP")}</Text>
      </Section>
      <Section>
        <Title>Region</Title>
        <Text>{formatRegion(region)}</Text>
      </Section>
      <Section>
        <Title>Treatment Fractions</Title>
        <Text>{fractionCount}</Text>
      </Section>
      <Section>
        <Title>Approx Session Time</Title>
        <Text>{fractionMinutes} minutes</Text>
      </Section>
      <Section>
        <Title>Constraints</Title>
        <Constraints constraints={constraints} />
      </Section>
    </Container>
  );
}
