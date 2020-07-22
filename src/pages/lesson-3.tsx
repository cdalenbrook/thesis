import React from "react";
import styled from "styled-components";
import { Layout, Title } from "../styles";
import Header from "../components/header";
import { BackNextRow } from "../components/back-next";
import ReactPlayer from "react-player";

const Video = styled.div`
  padding: 30px;
`;

function Lesson3() {
  return (
    <>
      <Layout>
        <Header />
        <Title>Using Decision Trees to Help Yuki See</Title>
        <Video>
          <ReactPlayer url="https://www.youtube.com/watch?v=BJPXC01gago" />
        </Video>
        <BackNextRow nextRoute="/quiz" previousRoute="/lesson/2" />
      </Layout>
    </>
  );
}

export default Lesson3;
