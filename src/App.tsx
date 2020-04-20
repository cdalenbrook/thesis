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
} from "./pages";

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
    overflow-x: hidden;
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
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <div>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/introduction">
              <Introduction />
            </Route>
            <Route path="/lesson/1">
              <Lesson1 />
            </Route>
            <Route path="/lesson/2">
              <Lesson2 />
            </Route>
            <Route path="/lesson/3">
              <Lesson3 />
            </Route>
            <Route path="/quiz">
              <Quiz />
            </Route>
            <Route path="/get-started">
              <GetStarted />
            </Route>
            <Route path="/insert-categories">
              <InsertCategories />
            </Route>
            <Route path="/add-toy">
              <AddToy />
            </Route>
            <Route path="/generate-model/1">
              <GenerateModel1 />
            </Route>
            <Route path="/generate-model/2">
              <GenerateModel2 />
            </Route>
            <Route path="/train-model/1">
              <TrainModel />
            </Route>
            <Route path="/train-model/2">
              <Training />
            </Route>
            <Route path="/decision-tree">
              <DecisionTree />
            </Route>
            <Route path="/test-tree">
              <TestTree />
            </Route>
            <Route path="/webcam-2">
              <Webcam2 />
            </Route>
            <Route path="/evaluation">
              <Evaluation />
            </Route>
            <Route path="/conclusion">
              <Conclusion />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
