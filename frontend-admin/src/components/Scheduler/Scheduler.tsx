import { Calendar } from "./Calendar";
import { PageBase } from "../PageBase";
import { TreatmentsToSchedule } from "./TreatmentsToSchedule";
import styled from "styled-components";
import { DndContext, pointerWithin } from "@dnd-kit/core";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export function Scheduler() {
  return (
    <PageBase title="Scheduler">
      <Container>
        <DndContext collisionDetection={pointerWithin}>
          <Calendar />
          <TreatmentsToSchedule />
        </DndContext>
      </Container>
    </PageBase>
  );
}
