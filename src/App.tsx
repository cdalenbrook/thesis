import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  About,
  Introduction,
  HomePage,
  Lesson1,
  Lesson2,
  Lesson3,
  Quiz,
  GetStarted,
  InsertCategories,
  AddToy,
  GenerateModel1,
  GenerateModel2,
  TrainModel,
  Training,
  DecisionTree,
  TestTree,
  Webcam2,
  Evaluation,
  Conclusion,
  Webcam1,
  DevArea,
} from "./pages";
import { Routes } from "./router";
import useUserSession from "./hooks/useUserSession";

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    background-color: #408af1;
    color: white;
    font-family: Futura; 
    margin: 10px;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  :root{
    --backgroundBlue: #408AF1;
    --buttonBlue: #A8D7FA; 
    --div1Blue: #78B6FA; 
    --div2Blue: #88CBFA; 
    --hover: #364550;
  }
`;

export default function App() {
  useUserSession();
  return (
    <>
      <GlobalStyle />
      <Router>
        <div>
          <Switch>
            <Route path={Routes.about}>
              <About />
            </Route>
            <Route path={Routes.introduction}>
              <Introduction />
            </Route>
            <Route path={Routes.lesson1}>
              <Lesson1 />
            </Route>
            <Route path={Routes.lesson2}>
              <Lesson2 />
            </Route>
            <Route path={Routes.lesson3}>
              <Lesson3 />
            </Route>
            <Route path={Routes.quiz}>
              <Quiz />
            </Route>
            <Route path={Routes.getStarted}>
              <GetStarted />
            </Route>
            <Route path={Routes.insertCategories}>
              <InsertCategories />
            </Route>
            <Route path={Routes.webcam1}>
              <Webcam1 />
            </Route>
            <Route path={Routes.addToy}>
              <AddToy />
            </Route>
            <Route path={Routes.generateModel1}>
              <GenerateModel1 />
            </Route>
            <Route path={Routes.generateModel2}>
              <GenerateModel2 />
            </Route>
            <Route path={Routes.trainModel}>
              <TrainModel />
            </Route>
            <Route path={Routes.training}>
              <Training />
            </Route>
            <Route path={Routes.decisionTree}>
              <DecisionTree />
            </Route>
            <Route path={Routes.testTree}>
              <TestTree />
            </Route>
            <Route path={Routes.webcam2}>
              <Webcam2 />
            </Route>
            <Route path={Routes.evaluation}>
              <Evaluation />
            </Route>
            <Route path={Routes.conclusion}>
              <Conclusion />
            </Route>
            <Route path={Routes.dev}>
              <DevArea />
            </Route>
            <Route path={Routes.home}>
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
