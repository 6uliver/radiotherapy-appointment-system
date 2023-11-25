import styled from "styled-components";
import { RowLegend } from "./RowLegend";
import { ColumnLegend } from "./ColumnLegend";

const Container = styled.div`
  flex-grow: 1;
  margin-right: 20px;
  h1 {
    margin-bottom: 5px;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  background-color: white;
  border: 1px solid black;
  height: 65vh;
`;

const ScrollWrapper = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  flex-grow: 1;
`;

const ColumnLegendContainer = styled.div`
  display: flex;
  border-bottom: 1px solid black;
`;

const ScrollPlaceHolder = styled.div`
  overflow: scroll;
  visibility: hidden;
  flex: none;
`;

const ColumnLegendPlaceholder = styled.div`
  width: 45px;
  flex-shrink: 0;
`;

const InnerWrapper = styled.div`
  display: flex;
`;

const LegendColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Row = styled.div`
  border-bottom: 1px solid grey;
  border-right: 1px solid grey;

  ${Column}:nth-child(2) & {
    border-left: 1px solid grey;
  }
  &:last-child {
    border-bottom: none;
  }
`;

const SubRow = styled.div`
  height: 10px;
  width: 10vw;
`;

export function Calendar() {
  const columns = new Array(5).fill(0);
  const rows = new Array(96).fill(0);

  return (
    <Container>
      <h1>Calendar</h1>
      <InnerContainer>
        <ColumnLegendContainer>
          <ColumnLegendPlaceholder />
          {columns.map((_i, idx) => {
            return <ColumnLegend idx={idx} />;
          })}
          <ScrollPlaceHolder />
        </ColumnLegendContainer>
        <ScrollWrapper>
          <InnerWrapper>
            <LegendColumn>
              <RowLegend rows={rows} />
            </LegendColumn>
            {columns.map((_i, idx) => {
              return (
                <Column key={idx}>
                  {rows.map((_i, idx) => {
                    return (
                      <Row key={idx}>
                        <SubRow></SubRow>
                        <SubRow></SubRow>
                        <SubRow></SubRow>
                      </Row>
                    );
                  })}
                </Column>
              );
            })}
          </InnerWrapper>
        </ScrollWrapper>
      </InnerContainer>
    </Container>
  );
}
