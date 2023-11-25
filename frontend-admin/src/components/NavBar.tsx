import styled from "styled-components";
import { OncoDarkGreen, OncoLightGreen } from "../theme";

const Container = styled.nav`
  background-color: ${OncoLightGreen};
  border-bottom: 2px black solid;
  border-top: 2px black solid;
`;

const Button = styled.button`
  color: ${OncoDarkGreen};
  background-color: transparent;
  border: 0;
  border-radius: 0;
  cursor: pointer;
  margin: 4px 8px 4px 8px;
  font-size: 18px;
  transition: 1000ms all;

  &:hover {
    color: white;
    transition: 300ms all;
  }
`;

export function NavBar() {
  return (
    <Container>
      <Button>Profile</Button>
      <Button>Appointments</Button>
      <Button>Settings</Button>
    </Container>
  );
}
