import styled from "styled-components";
import { useDraggable } from "@dnd-kit/core";
import { getColor } from "../../utilities/functions";
interface Props {
  id: string;
  name: string;
  count: number;
  finished: number;
}

const Wrapper = styled.div<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  border-radius: 5px;
  padding: 10px;
`;

export function Card({ id, name, count, finished }: Props) {
  const { listeners, attributes, isDragging, setNodeRef } = useDraggable({
    id,
    data: {
      id,
      name,
    },
  });

  return (
    <Wrapper
      bgColor={getColor(id)}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
    >
      {name} - {finished}/{count}
    </Wrapper>
  );
}
