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
  line-height: 25px;
  padding: 20px;
  font-size: 1.2em;
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
        <Title>Putting Everything Together</Title>
        <ExplanationDiv>
          In order for Yuki to be able to classify new toys into the categories
          you chose, he needs to use the examples you have given him, as well as
          the algorithm you programmed. The combination of these two things will
          allow him to learn associations between a toys features and their
          corresponding category. Once Yuki has learned these rules, he can make
          a decision tree, and then use this to make educated guesses about what
          category a new toy belongs into.
          <br></br>
          <br></br>
          The next page will display the decision tree that was generated using
          the code you made. Try to see what types of rules are encoded in the
          decision tree by going through the tree with a specific toy in mind.
          Does the decision tree find the correct classification for your toy?
        </ExplanationDiv>
        <Button onClick={() => history.push("/decision-tree")}>Done</Button>
      </Layout>
    </>
  );
}

export default TrainModel;
