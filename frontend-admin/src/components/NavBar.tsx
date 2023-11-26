import styled from "styled-components";
import { OncoDarkGreen, OncoLightGreen } from "../theme";
import { Link } from "react-router-dom";

const Container = styled.nav`
  background-color: ${OncoLightGreen};
`;

const InnerContainer = styled.div`
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  width: 1560px;
`;

const Button = styled(Link)`
  display: inline-block;
  color: ${OncoDarkGreen};
  background-color: transparent;
  border: 0;
  border-radius: 0;
  cursor: pointer;
  margin: 8px 30px 8px 0;
  font-size: 18px;
  transition: 1000ms all;
  text-decoration: none;

  &:hover {
    color: white;
    transition: 300ms all;
  }

  &:active {
    color: #b9b9b9;
    transition: 300ms all;
  }
`;

export function NavBar() {
  return (
    <Container>
      <InnerContainer>
        <Button to="/scheduler">Scheduler</Button>
        <Button to="/treatment-plans">Treament Plans</Button>
        <Button to="/machines">Machines</Button>
      </InnerContainer>
    </Container>
  );
}
