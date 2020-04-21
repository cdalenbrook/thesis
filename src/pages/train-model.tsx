import React from "react";
import styled from "styled-components";
import { Layout, Title, Button } from "../styles";
import { useHistory } from "react-router-dom";
import Header from "../components/header";

const ExplanationDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  background-color: var(--div1Blue);
  border-radius: 8px;
  margin: 10px;
  margin-bottom: 20px;
  padding: 20px;
  -webkit-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  -moz-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
`;

function TrainModel() {
  const history = useHistory();
  return (
    <>
      <Layout>
        <Header />
        <Title>Let's Train the Model!</Title>
        <ExplanationDiv>
          Explanation on how the next page will work
        </ExplanationDiv>
        <Button onClick={() => history.push("/train-model/2")}>TRAIN!</Button>
      </Layout>
    </>
  );
}

export default TrainModel;
