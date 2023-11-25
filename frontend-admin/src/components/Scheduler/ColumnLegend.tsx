import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding: 5px 0 5px;
  height: 4vh;
  flex-grow: 1;
  flex-basis: 100%;
  p {
    font-size: 12px;
  }
`;

const Day = styled.p`
  margin: 0;
`;

const Date = styled.p`
  margin: 0;
`;

interface ColumnLegendProps {
  idx: number;
}

export function ColumnLegend({ idx }: ColumnLegendProps) {
  let day: string;
  let date: string;

  switch (idx) {
    case 0:
      day = "Monday";
      date = "20";
      break;
    case 1:
      day = "Tuesday";
      date = "21";
      break;
    case 2:
      day = "Wednesday";
      date = "22";
      break;
    case 3:
      day = "Thursday";
      date = "23";
      break;
    case 4:
      day = "Friday";
      date = "24";
      break;
    default:
      throw new Error("invalid day");
  }
  return (
    <Container>
      <Date>{date}</Date>
      <Day>{day}</Day>
    </Container>
  );
}
