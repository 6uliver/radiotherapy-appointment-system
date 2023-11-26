import styled from "styled-components";
import { PageBase } from "../PageBase";
import { useParams } from "react-router-dom";
import { gql } from "../../gql";
import { useQuery } from "@apollo/client";
import { OncoDarkGreen } from "../../theme";
import { format } from "date-fns";
import {
  formatBoolean,
  formatRegion,
  formatSSN,
} from "../../utilities/functions";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Section = styled.div`
  border: 2px solid ${OncoDarkGreen};
  border-radius: 10px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Parameter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Title = styled.div`
  font-weight: bold;
`;

const Value = styled.div``;

const treatmentPlan = gql(`
  query TreatmentPlan($id: ID!) {
    treatmentPlanById(id: $id) {
      id
      region
      fractionCount
      constraints {
        inpatient
        breathHolding
        largeBodied
        kvImaging
      }
      fractions {
        start
        end
        machine {
          name
        }
      }
      patient {
        id
        firstName
        lastName
        dateOfBirth
        ssn
      }
    }
  }
`);

export function TreatmentPlanPage() {
  const { id } = useParams<"id">();

  const treatmentPlanQuery = useQuery(treatmentPlan, {
    variables: { id: id ?? "" },
    skip: !id,
  });

  if (!treatmentPlanQuery.data) {
    return;
  }
  const { patient, region, fractionCount, fractions, constraints } =
    treatmentPlanQuery.data.treatmentPlanById;
  const { firstName, lastName, dateOfBirth, ssn } = patient;
  const { inpatient, largeBodied, breathHolding, kvImaging } = constraints;
  const title = `Treatment plan for ${firstName} ${lastName}`;

  return (
    <PageBase title={title}>
      <Container>
        <Section>
          <Parameter>
            <Title>Date of birth</Title>
            <Value>{format(dateOfBirth, "PP")}</Value>
          </Parameter>
          <Parameter>
            <Title>SSN</Title>
            <Value>{formatSSN(ssn)}</Value>
          </Parameter>
          <Parameter>
            <Title>Email</Title>
            <Value>kismaria@example.com</Value>
          </Parameter>
          <Parameter>
            <Title>Phone</Title>
            <Value>+36701234567</Value>
          </Parameter>
          <Parameter>
            <Title>Region</Title>
            <Value>{formatRegion(region)}</Value>
          </Parameter>
          <Parameter>
            <Title>Transport</Title>
            <Value>Yes</Value>
          </Parameter>
          <Parameter>
            <Title>Inpatient</Title>
            <Value>{formatBoolean(inpatient)}</Value>
          </Parameter>
          <Parameter>
            <Title>Large bodied</Title>
            <Value>{formatBoolean(largeBodied)}</Value>
          </Parameter>
          <Parameter>
            <Title>Breath holding</Title>
            <Value>{formatBoolean(breathHolding)}</Value>
          </Parameter>
          <Parameter>
            <Title>kV imaging</Title>
            <Value>{formatBoolean(kvImaging)}</Value>
          </Parameter>
          <Title>Comments</Title>
          <Value></Value>
        </Section>
        <Section>
          <h1>Schedule</h1>
          <button>edit</button>
        </Section>
      </Container>
    </PageBase>
  );
}
