import React from "react";
import {} from "../styles";
import styled from "styled-components";
import { Button } from "../styles";
import { useHistory } from "react-router-dom";

interface IProps {
  nextRoute: string;
  previousRoute: string;
}

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const Layout = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 20px;
`;

function BackNextRow({ nextRoute, previousRoute }: IProps) {
  const router = useHistory();
  return (
    <Layout>
      <ButtonDiv>
        <Button
          height="120%"
          onClick={() => {
            if (router.length > 0) router.goBack();
            else router.push(previousRoute);
          }}
        >
          Back
        </Button>
        <Button height="120%" onClick={() => router.push(nextRoute)}>
          Next
        </Button>
      </ButtonDiv>
    </Layout>
  );
}

export { BackNextRow };
