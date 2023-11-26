import styled from "styled-components";
import { useDraggable } from "@dnd-kit/core";
interface Props {
  name: string;
}

const Wrapper = styled.div`
  background-color: rgb(191, 191, 191);
  border-radius: 5px;
  padding: 10px;
`;

export function Card({ name }: Props) {
  const { listeners, attributes, isDragging, setNodeRef } = useDraggable({
    id: name,
    data: {
      id: name,
    },
  });

  return (
    <Wrapper ref={setNodeRef} {...listeners} {...attributes}>
      {name} - {isDragging ? "dragging" : "not dragging"}
    </Wrapper>
  );
}
