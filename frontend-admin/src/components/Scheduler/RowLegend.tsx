import styled from "styled-components";

const Container = styled.div`
  height: 31px;
  &:last-child {
    height: 30px;
  }
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 0 5px 0 5px;
  p {
    font-size: 12px;
    margin: 0;
  }
`;

function getTime(index: number, increment: number) {
  const countPerHour = 60 / increment;
  const hour = String(Math.floor(index / countPerHour));
  const minutes = String(increment * (index % countPerHour));

  return `${hour.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
}

interface RowLegendProps {
  rows: number[];
}

export function RowLegend({ rows }: RowLegendProps) {
  return (
    <>
      {rows.map((_i, idx) => {
        return (
          <Container key={idx}>
            {(idx + 2) % 2 === 0 && <p>{`${getTime(idx, 15)}`}</p>}
          </Container>
        );
      })}
    </>
  );
}
