import React from "react";
import withNavBar from "../components/page-wrappers/withNavBar";
import styled from "styled-components";
import { Layout, Title, Button } from "../styles";

const Table = styled.div`
  background-color: var(--div1Blue);
  padding: 10px;
  margin: 20px;
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

function AddToy() {
  return (
    <>
      <Layout>
        <Title>Add Toy X to the Table?</Title>
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
      </Layout>
    </>
  );
}

export default withNavBar(AddToy);
