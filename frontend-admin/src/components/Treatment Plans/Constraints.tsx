import styled from "styled-components";
import { GiFat } from "react-icons/gi";
import { FaLungs, FaBed } from "react-icons/fa";
import { BiSolidImageAdd } from "react-icons/bi";
import { FaWheelchair } from "react-icons/fa";

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
    transport: boolean;
    inpatient: boolean;
    largeBodied: boolean;
    breathHolding: boolean;
    kvImaging: boolean;
  };
}

export function Constraints({ constraints }: Props) {
  const { transport, inpatient, largeBodied, breathHolding, kvImaging } =
    constraints;
  return (
    <Container>
      {transport && <FaWheelchair title="Requires transport" />}
      {inpatient && <FaBed title="Inpatient" />}
      {largeBodied && <GiFat title="Large bodied" />}
      {breathHolding && <FaLungs title="Breath holding" />}
      {kvImaging && <BiSolidImageAdd title="kV imaging" />}
      {!transport &&
        !inpatient &&
        !largeBodied &&
        !breathHolding &&
        !kvImaging &&
        "-"}
    </Container>
  );
}
