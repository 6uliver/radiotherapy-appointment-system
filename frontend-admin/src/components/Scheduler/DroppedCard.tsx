import styled from "styled-components";

const Container = styled.div`
  padding: 5px;
`;

const Wrapper = styled.div`
  background-color: rgb(191, 191, 191);
  border-radius: 5px;
  padding: 10px;
`;

interface Props {
  patient: {
    id: string;
  };
}

export function DroppedCard({ patient }: Props) {
  return (
    <Container>
      <Wrapper>{patient.id}</Wrapper>
    </Container>
  );
}
