import styled from "styled-components";
import { DroppedCard } from "./DroppedCard";
import { useDroppable } from "@dnd-kit/core";
import { useContext, useMemo } from "react";
import { FractionContext } from "./FractionContext";
import { gql, useFragment } from "../../gql";
import { getName } from "../../utilities/functions";

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

const fragment = gql(/* GraphQL */ `
  fragment FractionsForTimeSlot on Fraction {
    id
    start
    end
    treatmentPlan {
      patient {
        id
        firstName
        lastName
      }
    }
  }
`);

export function TimeSlot({ start, end }: Props) {
  const id = useMemo(() => "droppable-" + Math.random(), []);
  const { active, isOver, setNodeRef } = useDroppable({
    id,
  });

  const fractions = useContext(FractionContext);

  const data = fractions
    // eslint-disable-next-line react-hooks/rules-of-hooks
    .map((fraction) => useFragment(fragment, fraction));
  // console.log(fractions);
  const fraction = data.find((fraction) => {
    return start <= fraction.start && fraction.start < end;
  });

  return (
    <Wrapper ref={setNodeRef}>
      {isOver && active?.data.current && (
        <DroppedCard
          id={active.data.current.id}
          name={active.data.current.name}
        />
      )}
      {fraction && (
        <CardWrapper>
          <DroppedCard
            id={fraction.treatmentPlan.patient.id}
            name={`${getName(fraction.treatmentPlan.patient)}`}
          />
        </CardWrapper>
      )}
    </Wrapper>
  );
}
