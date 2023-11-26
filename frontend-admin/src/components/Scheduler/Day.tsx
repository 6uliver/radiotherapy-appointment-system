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

export function Day() {
  return (
    <Column>
      {timeslots.map((_i, idx) => (
        <Cell key={idx} />
      ))}
    </Column>
  );
}
