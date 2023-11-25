import { Calendar } from "./Calendar";
import { PageBase } from "../PageBase";
import { TreatmentsToSchedule } from "./TreatmentsToSchedule";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export function Scheduler() {
  return (
    <PageBase title="Scheduler">
      <Container>
        <Calendar />
        <TreatmentsToSchedule />
      </Container>
    </PageBase>
  );
}
