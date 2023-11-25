import styled from "styled-components";
import { Card } from "./Cards";

const Container = styled.div`
  h1 {
    margin-bottom: 5px;
  }
`;

const Title = styled.h1`
  margin-bottom: 5px;
`;

const Box = styled.div`
  border: 1px solid black;
  width: 15vw;
  height: 65vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

export function TreatmentsToSchedule() {
  return (
    <Container>
      <Title>Treatments To Schedule</Title>
      <Box>
        <Card name="Roland" />
        <Card name="Judit" />
        <Card name="Balázs" />
      </Box>
    </Container>
  );
}
