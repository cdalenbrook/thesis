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
  padding: 20px;
  -webkit-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  -moz-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 20px;
`;

function Conclusion() {
  const history = useHistory();
  return (
    <>
      <Layout>
        <Header />
        <Title>How did Yuki Do?</Title>
        <ExplanationDiv>
          What we learned, What we could do in the future, Other ML techniques
          to implement
        </ExplanationDiv>
        <ButtonDiv>
          <Button height="120%" onClick={() => history.push("/evaluation")}>
            Back
          </Button>
          <Button height="120%" onClick={() => history.push("/")}>
            Done
          </Button>
        </ButtonDiv>
      </Layout>
    </>
  );
}

export default Conclusion;
