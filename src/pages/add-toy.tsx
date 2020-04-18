import React from "react";
import withNavBar from "../components/page-wrappers/withNavBar";
import styled from "styled-components";
import { Layout, Title, Button } from "../styles";

const Table = styled.div`
  background-color: var(--div1Blue);
  padding: 10px;
  margin: 20px;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

function AddToy() {
  return (
    <>
      <Layout>
        <Title>Add Toy X to the Table?</Title>
        <Table>The table will be here</Table>
        <ButtonDiv>
          <Button>Back</Button>
          <Button>Add!</Button>
        </ButtonDiv>
      </Layout>
    </>
  );
}

export default withNavBar(AddToy);
