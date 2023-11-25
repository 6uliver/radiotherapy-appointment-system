import styled from "styled-components";
import { OncoWhite } from "../theme";
import { ReactNode } from "react";

const Container = styled.div`
  background-color: ${OncoWhite};
  margin: auto;
  justify-content: center;
  width: 85%;
  align-items: start;
  flex-grow: 1;
  padding: 20px;
`;

const Title = styled.p`
  font-size: 2rem;
`;

interface PageBaseProps {
  title: string;
  children?: ReactNode;
}

export function PageBase({ title, children }: PageBaseProps) {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {children}
    </Container>
  );
}
