import React from "react";
import { Layout, Title } from "../styles";
import styled from "styled-components";
import Header from "../components/header";
import { BackNextRow } from "../components/back-next";

const InfoDiv = styled.div`
  background-color: var(--div1Blue);
  width: 80%;
  text-align: left;
  margin: 20px;
  padding: 20px;
  border-radius: 8px;
`;

const PickCategories = styled.h1`
  font-size: 1.5em;
  padding-bottom: 10px;
`;

const Info = styled.p`
  font-size: 1em;
`;

const List = styled.ul`
  display: list-item;
  list-style-type: circle;
  margin-left: 40px;
  font-size: 1.25em;
`;

const ListItem = styled.li`
  margin-top: 10px;
  margin-bottom: 10px;
`;

function GetStarted() {
  return (
    <>
      <Layout>
        <Header />
        <Title>Let's Get Started!</Title>
        <InfoDiv>
          <PickCategories>Pick 2 Toy Categories</PickCategories>
          <Info>
            <List>
              <ListItem>
                Take the 14 toys that you have in front of you, either printed
                out or ready on a tablet or phone screen (if you do not yet have
                the pictures of the toys, click here and go to the
                “Requirements” section)
              </ListItem>
              <ListItem>
                Take a good look at the pictures of the 14 toys you have
              </ListItem>
              <ListItem>
                Can you find two categories that you can split the toys into?
                What makes the toy different from one another? What two groups
                can they be put into?
              </ListItem>
              <ListItem>
                Make sure that not all the toys belong into only one category;
                it is important that you have examples of both categories so
                that Yuki can learn from examples for both
              </ListItem>
              <ListItem>
                Once you have an idea, click the “Next” button below
              </ListItem>
            </List>
          </Info>
        </InfoDiv>
        <BackNextRow nextRoute="/insert-categories" previousRoute="/quiz" />
      </Layout>
    </>
  );
}

export default GetStarted;
