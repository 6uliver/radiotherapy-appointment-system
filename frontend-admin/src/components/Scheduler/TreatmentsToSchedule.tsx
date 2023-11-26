import styled from "styled-components";
import { Card } from "./Card";
import { DroppedCard } from "./DroppedCard";
import { DragOverlay, useDndMonitor } from "@dnd-kit/core";
import { useState } from "react";
import { gql } from "../../gql";
import { useQuery } from "@apollo/client";
import { getName } from "../../utilities/functions";

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
  overflow-x: scroll;
`;

const waitingForSchedule = gql(/* GraphQL */ `
  query TreatmentsToSchedule {
    treatmentPlansWaitingForSchedule {
      id
      fractionCount
      finishedFractionCount
      patient {
        id
        firstName
        lastName
      }
    }
  }
`);

export function TreatmentsToSchedule() {
  const [current, setCurrent] = useState<{ id: string; name: string }>();
  const [isOver, setOver] = useState(false);

  const waitingForScheduleQuery = useQuery(waitingForSchedule);

  useDndMonitor({
    onDragStart(event) {
      setCurrent(event.active.data.current as { id: string; name: string });
    },
    onDragEnd(event) {
      setCurrent(event.active.data.current as { id: string; name: string });
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
          <DroppedCard id={current.id} name={current.name} />
          {/* </Hider> */}
        </DragOverlay>
      )}
      <Box>
        {waitingForScheduleQuery.data?.treatmentPlansWaitingForSchedule.map(
          (treatmentPlan) => (
            <Card
              id={treatmentPlan.id}
              name={getName(treatmentPlan.patient)}
              count={treatmentPlan.fractionCount}
              finished={treatmentPlan.finishedFractionCount}
            />
          )
        )}
      </Box>
    </Container>
  );
}
