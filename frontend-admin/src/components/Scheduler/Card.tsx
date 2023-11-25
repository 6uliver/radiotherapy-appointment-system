import styled from "styled-components";
import { useDrag } from "react-dnd";

interface Props {
  name: string;
}

const Wrapper = styled.div`
  background-color: rgb(191, 191, 191);
  border-radius: 5px;
  padding: 10px;
`;

export function Card({ name }: Props) {
  const [collected, drag, dragPreview] = useDrag({
    type: "CARD",
    item: { id: name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    options: {
      dropEffect: "move",
    },
  });

  return collected.isDragging ? (
    <Wrapper ref={dragPreview}>
      {name} - preview - {collected.isDragging ? "dragging" : "not dragging"}
    </Wrapper>
  ) : (
    <Wrapper ref={drag}>
      {name} - {collected.isDragging ? "dragging" : "not dragging"}
    </Wrapper>
  );
}
