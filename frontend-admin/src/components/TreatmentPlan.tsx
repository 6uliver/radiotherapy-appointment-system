import styled from "styled-components";
import { OncoDarkGreen } from "../theme";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Section = styled.div`
  border: 2px solid ${OncoDarkGreen};
  border-radius: 10px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Parameter = styled.div`
  display: flex;

  :last-child {
    font-weight: bold;
    padding: 0 30px;
  }
`;

const Name = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 30px;

  :last-child {
    font-weight: bold;
  }
`;

export function TreatmentPlan() {
  return (
    <Container>
      <Section>
        <h1>Patient</h1>
        <Name>Molnár Lajosné</Name>
        <Parameter>
          Birth name <div>Kis Mária</div>
        </Parameter>
        <Parameter>
          Date of birth<div>1963.08.02.</div>
        </Parameter>
        <Parameter>
          SSN<div>123 456 789</div>
        </Parameter>
        <Parameter>
          Email<div>kismaria@example.com</div>
        </Parameter>
        <Parameter>
          Phone<div>+36701234567</div>
        </Parameter>
        <Parameter>
          Region <div>breast</div>
        </Parameter>
        <Parameter>
          Fractions <div>1/6</div>
        </Parameter>
        <Parameter>
          Inpatient<div>yes</div>
        </Parameter>
        <Parameter>
          Mobility<div>wheelchair</div>
        </Parameter>
        <Parameter>
          Need assistance for transport<div>yes</div>
        </Parameter>
        <Parameter>
          Large-bodied<div>yes</div>
        </Parameter>
        <Parameter>
          Breath-holding<div>yes</div>
        </Parameter>
        <Parameter>
          kV imaging<div>yes</div>
        </Parameter>
        <div>Comments</div>
      </Section>
      <Section>
        <h1>Schedule</h1>
        <button>edit</button>
      </Section>
    </Container>
  );
}
