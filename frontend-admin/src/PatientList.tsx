import { useQuery } from "@apollo/client";
import { gql } from "./gql";

const patients = gql(/* GraphQL */ `
  query patients {
    patients {
      id
      firstName
      lastName
    }
  }
`);

export function PatientList() {
  const patientsQuery = useQuery(patients);

  return (
    <div>
      <h2>Patients</h2>
      <div>
        {patientsQuery.loading && <div>Loading...</div>}
        {patientsQuery.error && <div>Error: {patientsQuery.error.message}</div>}
        {patientsQuery.data && (
          <ul>
            {patientsQuery.data.patients.map((patient) => (
              <li key={patient.id}>
                {patient.firstName} {patient.lastName}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
