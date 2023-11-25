import { Calendar } from "./Calendar";
import { PageBase } from "../PageBase";
import { Treatments } from "./Treatments";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export function Scheduler() {
  return (
    <PageBase title="Scheduler">
      <Container>
        <Calendar />
        <Treatments />
      </Container>
    </PageBase>
  );
}
