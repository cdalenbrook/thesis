import React from "react";
import styled from "styled-components";
import { Layout, Title } from "../styles";
import Header from "../components/header";
import { BackNextRow } from "../components/back-next";
import ReactPlayer from "react-player";

const Video = styled.div`
  padding: 30px;
`;

function Lesson1() {
  return (
    <>
      <Layout>
        <Header />
        <Title>Machine Learning</Title>
        <Video>
          <ReactPlayer url="https://youtu.be/_VfmMMZGdcw" />
        </Video>
        <BackNextRow nextRoute="/lesson/2" previousRoute="/introduction" />
      </Layout>
    </>
  );
}

export default Lesson1;
