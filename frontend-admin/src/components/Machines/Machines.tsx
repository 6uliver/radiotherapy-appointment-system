import styled from "styled-components";

import { PageBase } from "../PageBase";
import { List } from "./List";

const Container = styled.div``;

export function Machines() {
  return (
    <PageBase title="Machines">
      <Container>
        <List />
      </Container>
    </PageBase>
  );
}
