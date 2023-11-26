import styled from "styled-components";
import { DroppedCard } from "./DroppedCard";
import { useDroppable } from "@dnd-kit/core";
import { useMemo } from "react";

const Wrapper = styled.div`
  height: 10px;
`;

export function TimeSlot() {
  const id = useMemo(() => "droppable-" + Math.random(), []);
  const { active, isOver, setNodeRef } = useDroppable({
    id,
  });

  return (
    <Wrapper ref={setNodeRef}>
      {isOver && active?.data.current && (
        <DroppedCard patient={active.data.current as { id: string }} />
      )}
    </Wrapper>
  );
}
