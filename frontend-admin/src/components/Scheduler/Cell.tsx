import styled from "styled-components";
import { TimeSlot } from "./TimeSlot";

const Row = styled.div`
  border-bottom: 1px solid grey;
  border-right: 1px solid grey;

  :nth-child(2) > & {
    border-left: 1px solid grey;
  }
  &:last-child {
    border-bottom: none;
  }
`;

interface Props {
  start: number;
}

export function Cell({ start }: Props) {
  return (
    <Row>
      <TimeSlot start={start} end={start + 5 * 60 * 1000} />
      <TimeSlot start={start + 5 * 60 * 1000} end={start + 2 * 5 * 60 * 1000} />
      <TimeSlot
        start={start + 2 * 5 * 60 * 1000}
        end={start + 3 * 5 * 60 * 1000}
      />
    </Row>
  );
}
