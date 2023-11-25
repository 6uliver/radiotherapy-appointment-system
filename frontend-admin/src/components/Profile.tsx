import { UserList } from "../UserList";
import { PageBase } from "./PageBase";

export function Profile() {
  return (
    <PageBase title="Profile">
      <UserList />
    </PageBase>
  );
}
