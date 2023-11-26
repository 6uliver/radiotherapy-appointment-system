import { Calendar } from "./Calendar";
import { PageBase } from "../PageBase";
import { TreatmentsToSchedule } from "./TreatmentsToSchedule";
import styled from "styled-components";
import { DndContext, pointerWithin } from "@dnd-kit/core";
import { useMemo, useState } from "react";
import { MachineSelector } from "./MachineSelector";
import { gql } from "../../gql";
import { getWeek, parse, startOfWeek, endOfWeek } from "date-fns";
import { useQuery } from "@apollo/client";
import { FractionProvider } from "./FractionContext";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const fractionsGQL = gql(/* GraphQL */ `
  query FractionsForScheduler(
    $machineId: ID!
    $start: Timestamp!
    $end: Timestamp!
  ) {
    machineById(id: $machineId) {
      id
      fractionsByDate(start: $start, end: $end) {
        id
        start
        end
      }
    }
  }
`);

export function Scheduler() {
  const [machineId, setMachineId] = useState<string | null>(null);
  const [week, setWeek] = useState(getWeek(new Date()) - 1);

  const startDate = useMemo(
    () => startOfWeek(parse(week.toString(), "I", new Date())),
    [week]
  );
  const endDate = useMemo(
    () => endOfWeek(parse(week.toString(), "I", new Date())),
    [week]
  );

  const fractionsQuery = useQuery(fractionsGQL, {
    variables: {
      machineId: machineId ?? "",
      start: startDate,
      end: endDate,
    },
    skip: !machineId,
  });

  const fractions = fractionsQuery.data?.machineById.fractionsByDate || [];

  console.log(fractions);

  return (
    <PageBase title="Scheduler">
      <MachineSelector onMachineSelected={setMachineId} />
      <div>Week: {week}</div>
      <FractionProvider value={fractions}>
        <Container>
          <DndContext collisionDetection={pointerWithin}>
            <Calendar start={startDate.getTime()} />
            <TreatmentsToSchedule />
          </DndContext>
        </Container>
      </FractionProvider>
    </PageBase>
  );
}
