import styled from "styled-components";
import { OncoDarkGreen, OncoLightGreen } from "../theme";
import { Link } from "react-router-dom";

const Container = styled.nav`
  background-color: ${OncoLightGreen};
  border-bottom: 2px black solid;
  border-top: 2px black solid;
`;

const InnerContainer = styled.div`
  margin: 0 auto;
  display: flex;
  width: 85%;
`;

const Button = styled(Link)`
  display: inline-block;
  color: ${OncoDarkGreen};
  background-color: transparent;
  border: 0;
  border-radius: 0;
  cursor: pointer;
  margin: 4px 16px 4px 16px;
  font-size: 18px;
  transition: 1000ms all;
  text-decoration: none;

  &:hover {
    color: white;
    transition: 300ms all;
  }
`;

export function NavBar() {
  return (
    <Container>
      <InnerContainer>
        <Button to="/scheduler">Scheduler</Button>
        <Button to="/treatments">Treatments</Button>
        <Button to="/machines">Machines</Button>
        <Button to="/profile">Profile</Button>
        <Button to="/settings">Settings</Button>
      </InnerContainer>
    </Container>
  );
}
