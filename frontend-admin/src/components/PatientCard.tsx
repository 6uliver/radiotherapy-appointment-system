import styled from "styled-components";
import { GiFat } from "react-icons/gi";
import { FaLungs, FaBed } from "react-icons/fa";
import { BiSolidImageAdd } from "react-icons/bi";

const Container = styled.div``;

export function PatientCard() {
  return (
    <Container>
      <div>
        Molnár Lajosné
        <div>breast</div>
        <div>13/15</div>
        <GiFat />
        <FaLungs />
        <FaBed />
        <BiSolidImageAdd />
      </div>
    </Container>
  );
}
