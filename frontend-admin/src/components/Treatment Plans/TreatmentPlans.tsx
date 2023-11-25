import { useState } from "react";
import { PageBase } from "../PageBase";
import { List } from "./List";
import { Search } from "./SearchBar";

export function TreatmentPlans() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <PageBase title="Treatment Plans">
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {searchTerm && <List />}
    </PageBase>
  );
}
