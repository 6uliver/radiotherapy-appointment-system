import { UserList } from "../UserList";
import { PageBase } from "./PageBase";
import { PatientCard } from "./PatientCard";
import { TreatmentPlan } from "./TreatmentPlan";

export function Profile() {
  return (
    <PageBase title="Profile">
      <PatientCard/>
      <TreatmentPlan/>
      <UserList />
    </PageBase>
  );
}
