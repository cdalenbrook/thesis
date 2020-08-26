import React from "react";
import QrReader from "react-qr-reader";
import styled from "styled-components";
import { Button, Layout } from "../styles";
import Header from "../components/header";
import BackHelpNext from "../components/back-help-next";
import { Routes } from "../router";
import { toys, Toy } from "../data/toys";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducers";
import { predictItem } from "../actions";
import { useTypedSession } from "../hooks/useUserSession";

const Section = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-evenly;
  margin: 20px;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #78b6fa;
  border-radius: 8px;
  width: 50%;
  -webkit-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  -moz-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
`;

const YukiRecognizes = styled.div`
  background-color: #88cbfa;
  border-radius: 8px;
  height: 60%;
  width: 80%;
  float: left;
  -webkit-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  -moz-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  padding: 10px;
`;

const List = styled.ul`
  padding: 10px;
  font-size: 1.5em;
  margin: 0, 0, 20, 30;
`;

const ListItem = styled.li`
  margin: 2%;
`;

const Prediction = styled.h1`
  font-size: 1.5em;
  margin: 20px;
`;

function Webcam2() {
  const [toy, setToy] = React.useState<Toy>();
  const [currentData, setCurrentData] = React.useState<string>();
  const { categories } = useSelector((state: RootState) => state.categories);
  const { isLoading, prediction } = useSelector(
    (state: RootState) => state.tree
  );
  const session = useTypedSession();
  const dispatch = useDispatch();

  const handleError = (err: any) => {
    console.error(err);
  };

  const handleScan = (toy_id: string | null) => {
    if (!toy_id || !session || toy_id === currentData) return;
    setToy(toys[toy_id]);
    setCurrentData(toy_id);
    dispatch(predictItem(session.id, toy_id));
  };

  return (
    <>
      <Layout>
        <Header />
        <Section>
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: "40%" }}
          />
          <InfoDiv>
            <YukiRecognizes>
              <Title> Yuki Recognizes: {toy?.name} </Title>
              <List>
                <ListItem>Wheels: {toy?.wheels.toString()} </ListItem>
                <ListItem>Main Colour: {toy?.mainColor} </ListItem>
                <ListItem>Size: {toy?.size} </ListItem>
                <ListItem>Fluffy: {toy?.fluffy.toString()} </ListItem>
              </List>
              <Prediction>
                Yuki Predicts:{" "}
                {isLoading || !prediction
                  ? "_____"
                  : prediction[0] === 0
                  ? categories.category1
                  : categories.category2}
              </Prediction>
            </YukiRecognizes>
            <Title> This toy belongs to: </Title>
            <ButtonDiv>
              <Button onClick={() => alert("category 1")}>
                {categories.category1}
              </Button>
              <Button onClick={() => alert("category 2")}>
                {categories.category2}
              </Button>
            </ButtonDiv>
          </InfoDiv>
        </Section>
        <BackHelpNext
          previousRoute={Routes.testTree}
          helpRoute={Routes.home}
          nextRoute={Routes.evaluation}
        />
      </Layout>
    </>
  );
}

export default Webcam2;
