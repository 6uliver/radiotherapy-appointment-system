import styled from "styled-components";
import { HoursLegend } from "./HoursLegend";
import { DayLegend } from "./DayLegend";
import { Day } from "./Day";

const Container = styled.div`
  flex-grow: 1;
  margin-right: 20px;
`;

const Title = styled.h1`
  margin-bottom: 5px;
`;

const Table = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  height: 65vh;
`;

const ScrollWrapper = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  flex-grow: 1;
  display: flex;
`;

const Header = styled.div`
  display: flex;
  border-bottom: 1px solid black;
`;

const ScrollPlaceholder = styled.div`
  overflow: scroll;
  visibility: hidden;
  flex: none;
`;

const HeaderPlaceholder = styled.div`
  width: 45px;
  flex-shrink: 0;
`;

const days = new Array(5).fill(0);

interface Props {
  start: number;
}

export function Calendar({ start }: Props) {
  return (
    <Container>
      <Table>
        <Header>
          <HeaderPlaceholder />
          {days.map((_i, idx) => (
            <DayLegend key={idx} idx={idx} />
          ))}
          <ScrollPlaceholder />
        </Header>
        <ScrollWrapper>
          <HoursLegend />
          {days.map((_i, idx) => (
            <Day key={idx} start={start + idx * 24 * 60 * 60 * 1000} />
          ))}
        </ScrollWrapper>
      </Table>
    </Container>
  );
}
