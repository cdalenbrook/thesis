import React from "react";
import styled from "styled-components";
import { Button } from "../../styles";

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const Section = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default (WrappedComponent: React.ComponentType<any>) => {
  const hocComponent = ({ ...props }) => {
    return (
      <>
        <Layout>
          <Section>
            <WrappedComponent {...props} />
          </Section>
          <Section>
            <ButtonDiv>
              <Button height="120%" onClick={() => alert("Back")}>
                Back
              </Button>
              <Button height="120%" onClick={() => alert("Next")}>
                Next
              </Button>
            </ButtonDiv>
          </Section>
        </Layout>
      </>
    );
  };
  return hocComponent;
};
