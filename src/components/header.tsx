import React from "react";
import styled from "styled-components";
import icon from "../images/icon.png";
import { useHistory } from "react-router-dom";

const NavBar = styled.nav`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
`;

const Logo = styled.img`
  height: 80%;
  width: auto;
  cursor: pointer;
`;

const Teachers = styled.h1`
  cursor: pointer;
`;

function Header() {
  const history = useHistory();
  return (
    <>
      <NavBar>
        <Logo onClick={() => history.push("/")} src={icon} />
        <Teachers onClick={() => history.push("/about")}>for teachers</Teachers>
      </NavBar>
    </>
  );
}

export default Header;
