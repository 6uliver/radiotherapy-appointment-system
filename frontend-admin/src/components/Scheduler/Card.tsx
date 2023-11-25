import styled from "styled-components";

interface Props {
  name: string;
}

const Wrapper = styled.div`
  background-color: rgb(191, 191, 191);
  border-radius: 5px;
  padding: 10px;
`;

export function Card({ name }: Props) {
  return <Wrapper>{name}</Wrapper>;
}
