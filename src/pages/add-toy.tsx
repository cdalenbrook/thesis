import React from "react";
import styled from "styled-components";
import { Layout, Title, Button } from "../styles";
import Header from "../components/header";

const Table = styled.div`
  background-color: var(--div1Blue);
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
  -webkit-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  -moz-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
`;

const ButtonLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ButtonLayout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
`;

function AddToy() {
  return (
    <>
      <Layout>
        <Header />
        <Title>Add Toy X to the Table?</Title>
        <Section>
          <Table>The table will be here</Table>
          <ButtonLayout>
            <ButtonLeft>
              <Button>Back</Button>
            </ButtonLeft>
            <ButtonDiv>
              <Button>Add!</Button>
            </ButtonDiv>
            <ButtonDiv></ButtonDiv>
          </ButtonLayout>
        </Section>
      </Layout>
    </>
  );
}

export default AddToy;
