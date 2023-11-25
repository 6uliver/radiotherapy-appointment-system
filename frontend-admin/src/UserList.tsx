import { useQuery } from "@apollo/client";
import { gql } from "./gql";

const users = gql(/* GraphQL */ `
  query users {
    users {
      id
      firstName
    }
  }
`);

export function UserList() {
  const usersQuery = useQuery(users);

  return (
    <div>
      <h2>Users</h2>
      <div>
        {usersQuery.loading && <div>Loading...</div>}
        {usersQuery.error && <div>Error: {usersQuery.error.message}</div>}
        {usersQuery.data && (
          <ul>
            {usersQuery.data.users.map((user) => (
              <li key={user.id}>{user.firstName}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
