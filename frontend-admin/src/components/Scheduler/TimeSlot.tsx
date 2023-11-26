import styled from "styled-components";
import { DroppedCard } from "./DroppedCard";
import { useDroppable } from "@dnd-kit/core";
import { useContext, useMemo } from "react";
import { FractionContext } from "./FractionContext";

const Wrapper = styled.div`
  height: 10px;
  position: relative;
`;

const CardWrapper = styled.div`
  position: absolute;
  width: 100%;
`;

interface Props {
  start: number;
  end: number;
}

export function TimeSlot({ start, end }: Props) {
  const id = useMemo(() => "droppable-" + Math.random(), []);
  const { active, isOver, setNodeRef } = useDroppable({
    id,
  });

  const fractions = useContext(FractionContext);

  const fraction = fractions.find(
    (fraction) => start < fraction.start && fraction.start < end
  );

  return (
    <Wrapper ref={setNodeRef}>
      {isOver && active?.data.current && (
        <DroppedCard patient={active.data.current as { id: string }} />
      )}
      {fraction && (
        <CardWrapper>
          <DroppedCard patient={{ id: fraction?.machine?.name ?? "" }} />
        </CardWrapper>
      )}
    </Wrapper>
  );
}
