import styled from "styled-components";
import { OncoLightGreen, OncoWhite } from "../../theme";

const Container = styled.div`
  display: flex;
  align-items: center;
  min-height: 75px;
  margin: 5px;
  padding: 15px;
  background-color: ${OncoLightGreen};
  border: solid 1px grey;
  border-radius: 20px;
  cursor: pointer;
  transition: 1000ms all;

  &:hover {
    transition: 300ms all;
    background-color: ${OncoWhite};
  }

  &:active {
    transition: 100ms all;
    background-color: white;
  }
`;

const Name = styled.h1``;

const Status = styled.h1``;

export function Machine() {
  return (
    <Container>
      <Name>TB1</Name>
      <Status>Occupied</Status>
    </Container>
  );
}
