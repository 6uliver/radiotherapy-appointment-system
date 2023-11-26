import styled from "styled-components";
import { PageBase } from "../PageBase";
import { useParams } from "react-router-dom";
import { gql } from "../../gql";
import { useQuery } from "@apollo/client";

const Container = styled.div``;

const treatmentPlan = gql(`
  query TreatmentPlan($id: ID!) {
    treatmentPlanById(id: $id) {
      id
      region
      patient {
        id
        firstName
        lastName
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

  return (
    <PageBase title="patient-name">
      <Container>
        <h1>Im treatment plan page - {id}</h1>
        {treatmentPlanQuery.data?.treatmentPlanById.region}
        {treatmentPlanQuery.data?.treatmentPlanById.patient.firstName}{" "}
        {treatmentPlanQuery.data?.treatmentPlanById.patient.lastName}
      </Container>
    </PageBase>
  );
}
