import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { NavBar } from "./NavBar";

export function Navigation() {
  return (
    <>
      <Header />
      <NavBar />
      <Outlet />
    </>
  );
}
