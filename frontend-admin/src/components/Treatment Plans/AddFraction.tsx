import styled from "styled-components";
import { OncoDarkGreen, OncoLightGreen, OncoWhite } from "../../theme";
import { IoAddCircle } from "react-icons/io5";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 32px;
    height: auto;
    fill: ${OncoDarkGreen};
  }

  min-height: 75px;
  margin-bottom: 3px;
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

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export function AddFraction() {
  return (
    <Container>
      <Section>
        <IoAddCircle />
      </Section>
    </Container>
  );
}
