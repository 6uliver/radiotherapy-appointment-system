import styled from "styled-components";

const Container = styled.div``;

const Box = styled.div`
  border-bottom: 2px black solid;
  border-top: 2px black solid;

  &:first-child {
    background-color: aliceblue;
  }
`;

export function TreatmentPlan() {
  return (
    <Container>
      <section>
        <Box>
          <ul>
            <li>Birth name</li>
            <li>Date of birth</li>
            <li>TAJ</li>
            <li>E-mail</li>
            <li>Phone</li>
          </ul>
        </Box>
        <Box>
          <ul>
            <li>Region</li>
            <li>Fractions</li>
            <li>Inpatient</li>
            <li>Mobility</li>
            <li>Need assistance for transport</li>
            <li>Large-bodied</li>
            <li>Breath-holding</li>
            <li>kV imaging</li>
          </ul>
        </Box>
        <div>Comments</div>
      </section>
      <section>
        <h1>Schedule - 1/6</h1>
        <button>edit</button>
      </section>
    </Container>
  );
}
