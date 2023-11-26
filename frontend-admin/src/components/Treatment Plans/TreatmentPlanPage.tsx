import styled from "styled-components";
import { PageBase } from "../PageBase";
import { useParams } from "react-router-dom";
import { gql } from "../../gql";
import { useQuery } from "@apollo/client";
import { OncoDarkGreen } from "../../theme";
import { format } from "date-fns";
import { formatRegion, formatSSN } from "../../utilities/functions";

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

const treatmentPlan = gql(`
  query TreatmentPlan($id: ID!) {
    treatmentPlanById(id: $id) {
      id
      region
      patient {
        id
        firstName
        lastName
        dateOfBirth
        ssn
      }
    }
  }
`);

export function TreatmentPlanPage() {
  const { id } = useParams<"id">();

  const treatmentPlanQuery = useQuery(treatmentPlan, {
    variables: { id: id ?? "" },
    skip: !id,
  });

  if (!treatmentPlanQuery.data) {
    return;
  }
  const { patient, region } = treatmentPlanQuery.data.treatmentPlanById;
  const { firstName, lastName, dateOfBirth, ssn } = patient;
  const title = `${firstName} ${lastName}`;
  const convertedDateOfBirth = format(dateOfBirth, "PP");
  const formattedRegion = formatRegion(region);
  const formattedSSN = formatSSN(ssn);

  return (
    <PageBase title={title}>
      <Container>
        <Section>
          <Parameter>
            Date of birth<div>{convertedDateOfBirth}</div>
          </Parameter>
          <Parameter>
            SSN<div>{formattedSSN}</div>
          </Parameter>
          <Parameter>
            Email<div>kismaria@example.com</div>
          </Parameter>
          <Parameter>
            Phone<div>+36701234567</div>
          </Parameter>
          <Parameter>
            Region <div>{formattedRegion}</div>
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
    </PageBase>
  );
}
