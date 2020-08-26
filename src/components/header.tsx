import React from "react";
import styled from "styled-components";
import tree from "../images/tree.png";
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
  height: 40%;
  width: auto;
  cursor: pointer;
`;

const About = styled.h1`
  cursor: pointer;
  padding-right: 2%;
`;

function Header() {
  const history = useHistory();
  return (
    <>
      <NavBar>
        <Logo onClick={() => history.push("/")} src={tree} />
        <About onClick={() => history.push("/about")}>about</About>
      </NavBar>
    </>
  );
}

export default Header;
