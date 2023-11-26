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

export function Cell() {
  return (
    <Row>
      <TimeSlot />
      <TimeSlot />
      <TimeSlot />
    </Row>
  );
}
