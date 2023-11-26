import styled from "styled-components";
import logo from "../logo.svg";
import { OncoDarkGreen } from "../theme";

const Container = styled.div`
  margin: 0 auto;
  width: 85%;
  background-color: ${OncoDarkGreen};
`;

const Logo = styled.img`
  margin: 20px;
  height: 100px;
  width: auto;
`;

export function Header() {
  return (
    <Container>
      <Logo src={logo}></Logo>
    </Container>
  );
}
