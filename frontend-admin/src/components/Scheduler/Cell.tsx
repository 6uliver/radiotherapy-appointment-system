import styled from "styled-components";

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

const SubRow = styled.div`
  height: 10px;
  width: 10vw;
`;

export function Cell() {
  return (
    <Row>
      <SubRow></SubRow>
      <SubRow></SubRow>
      <SubRow></SubRow>
    </Row>
  );
}
