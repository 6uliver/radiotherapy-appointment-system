import styled from "styled-components";
import { OncoLightGreen } from "../theme";
import { ReactNode } from "react";

const Container = styled.div`
  background-color: ${OncoLightGreen};
  margin: auto;
  justify-content: center;
  width: 85%;
  align-items: start;
  flex-grow: 1;
`;

const Title = styled.p`
  font-size: 2rem;
  margin: 25px 0 0 5px;
`;

interface PageBaseProps {
  title: string;
  children?: ReactNode;
}

export function PageBase({ title, children }: PageBaseProps) {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}
