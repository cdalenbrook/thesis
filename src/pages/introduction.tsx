import React from "react";
import styled from "styled-components";
import withNavBar from "../components/page-wrappers/withNavBar";
import ReactPlayer from "react-player";
import { Button, Layout } from "../styles";
import { useHistory } from "react-router-dom";

const Title = styled.h1`
  font-size: 3em;
`;

const Video = styled.div`
  padding: 30px;
`;

function Introduction() {
  const history = useHistory();
  return (
    <>
      <Layout>
        <Title>Introduction</Title>
        <Video>
          <ReactPlayer url="https://www.youtube.com/watch?v=ug50zmP9I7s" />
        </Video>
        <Button onClick={() => history.push("/lesson/1")}> Help Yuki! </Button>
      </Layout>
    </>
  );
}

export default withNavBar(Introduction);
