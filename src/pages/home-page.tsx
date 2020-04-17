import React from "react";
import styled from "styled-components";
import { Button } from "../styles";
import icon from "../images/icon.png";
import { useHistory } from "react-router-dom";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3em;
  padding: 50px;
`;

const Subtitle = styled.p`
  font-size: 1em;
  padding: 50px;
`;

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
`;

const Teachers = styled.h1`
  cursor: pointer;
`;

function HomePage() {
  const history = useHistory();
  return (
    <>
      <NavBar>
        <Logo src={icon} />
        <Teachers onClick={() => history.push("/about")}>for teachers</Teachers>
      </NavBar>
      <Layout>
        <Title>Teach Yuki to See</Title>
        <Subtitle>A machine learning lesson for 11-14 year olds</Subtitle>
        <Button>LET'S GO!</Button>
      </Layout>
    </>
  );
}

export default HomePage;
