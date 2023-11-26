import { useParams } from "react-router-dom";
import styled from "styled-components";
import { PageBase } from "../PageBase";
import { gql } from "../../gql";
import { useQuery } from "@apollo/client";

const Container = styled.div``;

const machine = gql(`
  query Machine($id: ID!) {
    machineById(id: $id) {
      id
      name
      }
    }
`);

export function MachinePage() {
  const { id } = useParams<"id">();

  const machineQuery = useQuery(machine, {
    variables: { id: id ?? "" },
    skip: !id,
  });

  if (!machineQuery.data) {
    return;
  }

  return (
    <PageBase title={machineQuery.data.machineById.name}>
      <Container></Container>
    </PageBase>
  );
}
