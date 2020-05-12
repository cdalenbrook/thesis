import React from "react";
import styled from "styled-components";
import Header from "../components/header";
import { Layout } from "../styles";
import BackHelpNext from "../components/back-help-next";
import { Routes } from "../router";

const Text = styled.h1`
  font-size: 2.5em;
  padding: 30px;
`;

const Input = styled.input`
  height: 50px;
  padding: 10px;
  margin: 20px;
  border-radius: 8px;
  border: none;
  font-family: Futura;
  font-size: 1em;
  outline: none;
`;

const Label = styled.label`
  font-size: 1.5em;
`;

const Form = styled.form`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 60%;
`;

function InsertCategories() {
  const [category1, setCategory1] = React.useState<string>("");
  const [category2, setCategory2] = React.useState<string>("");

  return (
    <>
      <Layout>
        <Header />
        <Text> Enter your chosen categories: </Text>
        <Form>
          <Label>Category 1:</Label>
          <Input
            type="text"
            id="category1"
            name="category1"
            onChange={(event) => setCategory1(event.target.value)}
          />
          <Label>Category 2:</Label>
          <Input
            type="text"
            id="category2"
            name="category2"
            onChange={(event) => setCategory2(event.target.value)}
          />
        </Form>
        <BackHelpNext
          previousRoute={Routes.getStarted}
          helpRoute={Routes.home}
          nextRoute={Routes.webcam1}
        />
      </Layout>
    </>
  );
}

export default InsertCategories;
