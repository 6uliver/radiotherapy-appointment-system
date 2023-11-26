import styled from "styled-components";
import { PageBase } from "../PageBase";
import { useParams } from "react-router-dom";

const Container = styled.div``;

export function TreatmentPlanPage() {
  const { id } = useParams<"id">();

  return (
    <PageBase title="patient-name">
      <Container>
        <h1>Im treatment plan page - {id}</h1>
      </Container>
    </PageBase>
  );
}
