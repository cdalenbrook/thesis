import React from "react";
import QrReader from "react-qr-reader";
import styled from "styled-components";
import { Layout } from "../styles";
import Header from "../components/header";
import BackHelpNext from "../components/back-help-next";
import { Routes } from "../router";
import { toys, Toy } from "../data/toys";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducers";
import { predictItem } from "../actions";
import { useTypedSession } from "../hooks/useUserSession";
import { CircularProgress } from "@material-ui/core";

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

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  padding: 10px;
`;

const ListDiv = styled.div`
  display: flex;
  justify-content: left;
  width: 80%;
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

  const showPrediction = () => {
    if (isLoading) {
      return <CircularProgress />;
    }
    if (!prediction || !prediction.length) {
      return "______";
    } else if (prediction[0] === 0) {
      return categories.category2;
    } else {
      return categories.category1;
    }
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
            <Title> Yuki Recognizes: {toy?.name} </Title>
            <ListDiv>
              <List>
                <ListItem>Wheels: {toy?.wheels.toString()} </ListItem>
                <ListItem>Main Colour: {toy?.mainColor} </ListItem>
                <ListItem>Size: {toy?.size} </ListItem>
                <ListItem>Fluffy: {toy?.fluffy.toString()} </ListItem>
              </List>
            </ListDiv>
            <Prediction>Yuki Predicts: {showPrediction()}</Prediction>
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
