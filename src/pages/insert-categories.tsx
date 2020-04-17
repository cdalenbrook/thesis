import React from "react";
import styled from "styled-components";
import withNavBar from "../components/page-wrappers/withNavBar";
import withBackHelpNext from "../components/page-wrappers/withBackHelpNext";
import TextField from "@material-ui/core/TextField";

const Layout = styled.div`
  display: flex;
  justify-content: center;
`;

const MainSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.h1`
  font-size: 2.5em;
  padding: 50px;
`;

function InsertCategories() {
  return (
    <>
      <Layout>
        <MainSection>
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
        </MainSection>
      </Layout>
    </>
  );
}

export default withNavBar(withBackHelpNext(InsertCategories));
