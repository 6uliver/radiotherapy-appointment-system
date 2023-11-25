import styled from "styled-components";
import { Machine } from "./Machine";

const Container = styled.div`
  border: 1px solid black;
  background-color: white;
`;

const ResultCount = styled.h2`
  margin: 15px 0 5px 0;
`;

export function List() {
  const results = new Array(5).fill(0);

  return (
    <>
      <ResultCount>{results.length} machines</ResultCount>
      <Container>
        {results.map((_i, idx) => (
          <Machine key={idx} />
        ))}
      </Container>
    </>
  );
}
