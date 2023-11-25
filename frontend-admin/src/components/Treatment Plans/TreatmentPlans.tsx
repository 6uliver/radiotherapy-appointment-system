import { useState } from "react";
import { PageBase } from "../PageBase";
import { List } from "./List";
import { Search } from "./SearchBar";
import { gql } from "../../gql";
import { useQuery } from "@apollo/client";

const search = gql(/* GraphQL */ `
  query searchTreatmentPlans($searchTerm: String!) {
    searchTreatmentPlans(searchTerm: $searchTerm) {
      ...TreatmentPlanForList
    }
  }
`);

export function TreatmentPlans() {
  const [searchTerm, setSearchTerm] = useState("");

  const searchQuery = useQuery(search, {
    variables: { searchTerm },
    skip: !searchTerm,
  });

  console.log(searchQuery.data);

  return (
    <PageBase title="Treatment Plans">
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {searchQuery.data && (
        <List treatmentPlans={searchQuery.data.searchTreatmentPlans} />
      )}
    </PageBase>
  );
}
