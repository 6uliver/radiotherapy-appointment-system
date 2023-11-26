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
  getTpn,
} from "../../utilities/functions";
import { Fraction } from "./Fraction";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Details = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
`;

const Appointments = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

const SectionHeader = styled.h1`
  padding: 0 0 5px 5px;
`;

const Section = styled.div`
  width: 90%;
  border: 2px solid ${OncoDarkGreen};
  padding: 3px;
  height: 65vh;

  display: flex;
  flex-direction: column;
`;

const Parameter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 15px;
`;

const Title = styled.div`
  font-weight: bold;
`;

const Value = styled.div``;

const Comments = styled.textarea`
  height: 100%;
  padding: 0 0 0 0;
  margin-top: 5px;
  resize: none;
`;

const treatmentPlan = gql(`
  query TreatmentPlan($id: ID!) {
    treatmentPlanById(id: $id) {
      id
      region
      fractionCount
      fractions {
        id
        ...FractionForFractions
      }
      patient {
        id
        firstName
        lastName
        dateOfBirth
        ssn
        email
        phone
      }
      constraints {
        transport
        inpatient
        breathHolding
        largeBodied
        kvImaging
      }
    }
  }
`);

export function PlanPage() {
  const { id } = useParams<"id">();

  const treatmentPlanQuery = useQuery(treatmentPlan, {
    variables: { id: id ?? "" },
    skip: !id,
  });

  if (!treatmentPlanQuery.data) {
    return;
  }
  const {
    id: uid,
    patient,
    region,
    fractionCount,
    fractions,
    constraints,
  } = treatmentPlanQuery.data.treatmentPlanById;
  const { firstName, lastName, dateOfBirth, ssn, email, phone } = patient;
  const { transport, inpatient, largeBodied, breathHolding, kvImaging } =
    constraints;
  const fullName = `${firstName} ${lastName}`;
  const title = `${getTpn(uid)} : ${fullName}`;

  return (
    <PageBase title={title}>
      <Container>
        <Details>
          <SectionHeader>Details</SectionHeader>
          <Section>
            <Parameter>
              <Title>Name</Title>
              <Value>{fullName}</Value>
            </Parameter>
            <Parameter>
              <Title>Date of birth</Title>
              <Value>{format(dateOfBirth, "PP")}</Value>
            </Parameter>
            <Parameter>
              <Title>TPN</Title>
              <Value>{getTpn(uid)}</Value>
            </Parameter>
            <Parameter>
              <Title>SSN</Title>
              <Value>{formatSSN(ssn)}</Value>
            </Parameter>
            <Parameter>
              <Title>Email</Title>
              <Value>{email}</Value>
            </Parameter>
            <Parameter>
              <Title>Phone</Title>
              <Value>{phone}</Value>
            </Parameter>
            <Parameter>
              <Title>Region</Title>
              <Value>{formatRegion(region)}</Value>
            </Parameter>
            <Parameter>
              <Title>Transport</Title>
              <Value>{formatBoolean(transport)}</Value>
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
            <Comments />
          </Section>
        </Details>
        <Appointments>
          <SectionHeader>{`Allocated appointments ${fractions.length}/${fractionCount}`}</SectionHeader>
          <Section>
            {fractions.map((fraction) => (
              <Fraction fraction={fraction} key={fraction.id} />
            ))}
          </Section>
        </Appointments>
      </Container>
    </PageBase>
  );
}
