import styled from "styled-components";
import { Card } from "./Card";
import { DroppedCard } from "./DroppedCard";
import { DragOverlay, useDndMonitor } from "@dnd-kit/core";
import { useState } from "react";

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
  const [current, setCurrent] = useState<{ id: string }>();
  const [isOver, setOver] = useState(false);

  useDndMonitor({
    onDragStart(event) {
      setCurrent(event.active.data.current as { id: string });
    },
    onDragEnd(event) {
      setCurrent(event.active.data.current as { id: string });
    },
    onDragMove(event) {
      setOver(event.over !== null);
    },
  });

  return (
    <Container>
      <Title>Treatments To Schedule</Title>
      {!isOver && current && (
        <DragOverlay dropAnimation={null}>
          {/* <Hider hide={}> */}
          <DroppedCard id={current.id} name={"Name"} />
          {/* </Hider> */}
        </DragOverlay>
      )}
      <Box>
        <Card name="Roland" />
        <Card name="Judit" />
        <Card name="Balázs" />
      </Box>
    </Container>
  );
}
