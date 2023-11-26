import { useParams } from "react-router-dom";
import styled from "styled-components";
import { PageBase } from "../PageBase";

const Container = styled.div``;

export function MachinePage() {
  const { id } = useParams<"id">();

  return (
    <PageBase title="machine-name">
      <Container>
        <h1>im machinepage - {id}</h1>
      </Container>
    </PageBase>
  );
}
