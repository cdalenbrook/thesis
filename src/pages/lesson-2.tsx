import React from "react";
import styled from "styled-components";
import { Layout, Title } from "../styles";
import Header from "../components/header";
import { BackNextRow } from "../components/back-next";
import ReactPlayer from "react-player";

const Video = styled.div`
  padding: 30px;
`;

function Lesson2() {
  return (
    <>
      <Layout>
        <Header />
        <Title>Decision Trees</Title>
        <Video>
          <ReactPlayer url="https://www.youtube.com/watch?v=xmqZId_zVWE" />
        </Video>
        <BackNextRow nextRoute="/lesson/3" previousRoute="/lesson/2" />
      </Layout>
    </>
  );
}

export default Lesson2;
