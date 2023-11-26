import styled from "styled-components";
import { Cell } from "./Cell";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 100%;
`;

const timeslots = new Array(96).fill(0);

interface Props {
  start: number;
}

export function Day({ start }: Props) {
  return (
    <Column>
      {timeslots.map((_i, idx) => (
        <Cell key={idx} start={start + idx * 15 * 60 * 1000} />
      ))}
    </Column>
  );
}
