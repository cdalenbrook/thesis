import React from "react";
import QrReader from "react-qr-reader";
import styled from "styled-components";
import { Layout, Button } from "../styles";
import Header from "../components/header";
import { Routes } from "../router";
import { toys, Toy, ToysAndVals } from "../data/toys";
import { useHistory } from "react-router-dom";
import { useCounter } from "@umijs/hooks";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducers";
import { trainTree } from "../actions";

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
  height: 50%;
  width: 80%;
  float: left;
  -webkit-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  -moz-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  overflow: scroll;
  overflow-x: hidden;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  padding-top: 10px;
`;

const List = styled.ul`
  padding: 10px;
  font-size: 1.5em;
  margin: 0, 0, 20, 30;
`;

const ListItem = styled.li`
  margin: 2%;
`;

const Button2 = styled.button`
  background-color: var(--buttonBlue);
  color: white;
  border-radius: 25px;
  width: 30%;
  font-family: Futura;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  -moz-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  font-size: 1.5em;
  cursor: pointer;
  border: none;
`;

const kNumToys = 1;

function Webcam1(props: any) {
  const router = useHistory();
  const { categories } = useSelector((state: RootState) => state.categories);
  const dispatch = useDispatch();

  const [state, setState] = React.useState<ToysAndVals>({});
  const [toy, setToy] = React.useState<Toy>();
  const [currentID, setCurrentID] = React.useState<string>("");
  const [current, { inc }] = useCounter(0, { min: 0, max: kNumToys });

  const setCategory = (category: boolean) => {
    if (!toy) return;
    inc();
    setState({
      ...state,
      [currentID]: category ? 1 : 0,
    });
  };

  const handleScan = (data: string | null) => {
    if (!data) return;
    setToy(toys[data]);
    setCurrentID(data);
  };
  const handleError = (err: any) => {
    console.error(err);
  };

  const handleNext = () => {
    if (current !== kNumToys) {
      //handle not all toys were given
      alert(`You've only given me ${current}/${kNumToys} toys.\n\nKeep going!`);
    } else {
      //go to next page
      dispatch(trainTree(categories, state));
      //router.push(nextRoute);
    }
  };

  const previousRoute = Routes.insertCategories;
  const helpRoute = Routes.home;
  const nextRoute = Routes.generateModel1;

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
              <Title> Yuki Recognizes: {toy?.name}</Title>
              <List>
                <ListItem>Wheels: {toy?.wheels.toString()} </ListItem>
                <ListItem>Main Colour: {toy?.mainColor} </ListItem>
                <ListItem>Size: {toy?.size} </ListItem>
                <ListItem>Fluffy: {toy?.fluffy.toString()} </ListItem>
              </List>
            </YukiRecognizes>
            <Title> This toy belongs to: </Title>
            <ButtonDiv>
              <Button onClick={() => setCategory(true)}>
                {categories.category1}
              </Button>
              <Button onClick={() => setCategory(false)}>
                {categories.category2}
              </Button>
            </ButtonDiv>
          </InfoDiv>
        </Section>

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
          <Button height="120%" onClick={() => router.push(helpRoute)}>
            Help
          </Button>
          <Button2 onClick={handleNext}>Next</Button2>
        </ButtonDiv>
      </Layout>
    </>
  );
}

export default Webcam1;
