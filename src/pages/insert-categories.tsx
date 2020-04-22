import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Header from "../components/header";
import { Layout } from "../styles";
import BackHelpNext from "../components/back-help-next";
import { Routes } from "../router";

const Text = styled.h1`
  font-size: 2.5em;
  padding: 50px;
`;

function InsertCategories() {
  return (
    <>
      <Layout>
        <Header />
        <Text> Enter your chosen categories: </Text>
        <form noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Category 1"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Category 2"
            variant="outlined"
          />
        </form>
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
