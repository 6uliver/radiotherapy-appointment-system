import styled from "styled-components";
import { GiFat } from "react-icons/gi";
import { FaLungs, FaBed } from "react-icons/fa";
import { BiSolidImageAdd } from "react-icons/bi";

const Container = styled.div`
  display: flex;
  svg {
    width: 18px;
    height: auto;
    margin-right: 5px;
  }
`;

interface Props {
  constraints: {
    inpatient: boolean;
    largeBodied: boolean;
    breathHolding: boolean;
    kvImaging: boolean;
  };
}

export function Constraints({ constraints }: Props) {
  const { inpatient, largeBodied, breathHolding, kvImaging } = constraints;
  return (
    <Container>
      {inpatient && <FaBed title="Inpatient" />}
      {largeBodied && <GiFat title="Large bodied" />}
      {breathHolding && <FaLungs title="Breath holding" />}
      {kvImaging && <BiSolidImageAdd title="kV imaging" />}
      {!inpatient && !largeBodied && !breathHolding && !kvImaging && "-"}
    </Container>
  );
}
