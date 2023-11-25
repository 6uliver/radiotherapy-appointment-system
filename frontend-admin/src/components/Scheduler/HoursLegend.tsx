import styled from "styled-components";

const Cell = styled.div`
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 0 5px 0 5px;
  height: 31px;

  &:last-child {
    height: 30px;
  }
`;

const Time = styled.span`
  font-size: 12px;
`;

function getTime(index: number, increment: number) {
  const countPerHour = 60 / increment;
  const hour = String(Math.floor(index / countPerHour));
  const minutes = String(increment * (index % countPerHour));

  return `${hour.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
}

const timeslots = new Array(96).fill(0);

export function HoursLegend() {
  return (
    <div>
      {timeslots.map((_i, idx) => {
        return (
          <Cell key={idx}>
            {idx % 2 === 0 && <Time>{`${getTime(idx, 15)}`}</Time>}
          </Cell>
        );
      })}
    </div>
  );
}
