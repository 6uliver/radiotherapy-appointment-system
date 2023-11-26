import styled from "styled-components";
import stc from "string-to-color";

const Container = styled.div`
  padding: 2px;
`;

const Wrapper = styled.div<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  border-radius: 5px;
  padding: 5px;
  height: 26px;
`;

interface Props {
  id: string;
  name: string;
}

export function DroppedCard({ id, name }: Props) {
  return (
    <Container>
      <Wrapper bgColor={stc(id)}>{name}</Wrapper>
    </Container>
  );
}
