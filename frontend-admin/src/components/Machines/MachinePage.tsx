import { useParams } from "react-router-dom";
import styled from "styled-components";
import { PageBase } from "../PageBase";
import { gql } from "../../gql";
import { useQuery } from "@apollo/client";
import { format } from "date-fns";
import { OncoDarkGreen } from "../../theme";
import { AddFraction } from "../Treatment Plans/AddFraction";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Wrapper = styled.div`
  width: 95%;
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
      <Container>
        <Details>
          <Wrapper>
            <SectionHeader>Details</SectionHeader>
            <Section>
              <Parameter>
                <Title>Name</Title>
                <Value>{machineQuery.data.machineById.name}</Value>
              </Parameter>
              <Parameter>
                <Title>Last maintenance</Title>
                <Value>{format(1692212112222, "PP")}</Value>
              </Parameter>
              <Parameter>
                <Title>Upcoming maintenance</Title>
                <Value>{format(1730812112222, "PP")}</Value>
              </Parameter>
              <Title>Comments</Title>
              <Comments />
            </Section>
          </Wrapper>
        </Details>

        <Appointments>
          <Wrapper>
            <SectionHeader>{`Allocated appointments`}</SectionHeader>
            <Section>
              <AddFraction />
            </Section>
          </Wrapper>
        </Appointments>
      </Container>
    </PageBase>
  );
}
