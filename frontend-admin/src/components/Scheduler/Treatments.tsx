import styled from "styled-components";

const Container = styled.div`
  h1 {
    margin-bottom: 5px;
  }
`;

const InnerContainer = styled.div`
  border: 1px solid black;
  width: 15vw;
  height: 65vh;
  background-color: white;
  display: grid;
`;

export function Treatments() {
  return (
    <Container>
      <h1>Treatments</h1>
      <InnerContainer></InnerContainer>
    </Container>
  );
}
