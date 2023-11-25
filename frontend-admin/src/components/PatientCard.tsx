import styled from "styled-components";
import { GiFat } from "react-icons/gi";
import { FaLungs, FaBed } from "react-icons/fa";
import { BiSolidImageAdd } from "react-icons/bi";
import { OncoDarkGreen, OncoLightGreen } from "../theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  color: ${OncoDarkGreen};
  background-color: ${OncoLightGreen};
`;

const Icons = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: flex-end;
  gap: 5px;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const Patient = styled.div`
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export function PatientCard() {
  return (
    <Container>
      <Patient>
        <Name>Molnár Lajosné</Name>
        <div>breast</div>
        <div>13/15</div>
      </Patient>
      <div>
        <Icons>
          <FaBed title="inpatient" />
          <GiFat title="large-bodied" />
          <FaLungs title="breath-holding" />
          <BiSolidImageAdd title="kV imaging" />
        </Icons>
      </div>
    </Container>
  );
}
