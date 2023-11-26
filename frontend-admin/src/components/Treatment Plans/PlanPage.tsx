import styled from "styled-components";
import { PageBase } from "../PageBase";
import { useParams } from "react-router-dom";
import { gql } from "../../gql";
import { useQuery } from "@apollo/client";
import { OncoDarkGreen } from "../../theme";
import { format } from "date-fns";
import { formatRegion, formatSSN, getTpn } from "../../utilities/functions";
import { Fraction } from "./Fraction";
import { Constraints } from "./Constraints";
import { AddFraction } from "./AddFraction";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Details = styled.div`
  width: 100%;
  flex-basis: 25%;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const Appointments = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const SectionHeader = styled.h1`
  padding: 0 0 5px 5px;
`;

const Section = styled.div`
  width: 100%;
  border: 1px solid ${OncoDarkGreen};
  border-radius: 5px;
  padding: 20px;
  height: 65vh;

  display: flex;
  flex-direction: column;
  overflow-x: scroll;
`;

const Parameter = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  margin-bottom: 15px;
`;

const Title = styled.div`
  font-weight: bold;
  margin-right: 15px;
`;

const Value = styled.div``;

const Comments = styled.textarea`
  height: 100%;
  padding: 0 0 0 0;
  margin-top: 15px;
  padding: 20px;
  font-size: 20px;
  resize: none;
  outline: none;
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
  const fullName = `${firstName} ${lastName}`;
  const title = `${fullName} - ${getTpn(uid)} `;

  return (
    <PageBase title={title}>
      <Container>
        <Details>
          <Wrapper>
            <SectionHeader>Details</SectionHeader>
            <Section>
              <Parameter>
                <Title>Name</Title>
                <Value>{fullName}</Value>
              </Parameter>
              <Parameter>
                <Title>TPN</Title>
                <Value>{getTpn(uid)}</Value>
              </Parameter>
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
                <Title>Constraints</Title>
                <Constraints constraints={constraints} />
              </Parameter>
              <Title>Comments</Title>
              <Comments />
            </Section>
          </Wrapper>
        </Details>
        <Appointments>
          <Wrapper>
            <SectionHeader>{`Allocated appointments ${fractions.length}/${fractionCount}`}</SectionHeader>
            <Section>
              {fractions.map((fraction) => (
                <Fraction fraction={fraction} key={fraction.id} />
              ))}
              {fractionCount / fractions.length > 1 && <AddFraction />}
            </Section>
          </Wrapper>
        </Appointments>
      </Container>
    </PageBase>
  );
}
