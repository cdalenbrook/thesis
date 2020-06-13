import React from "react";
import styled from "styled-components";
import Header from "../components/header";
import { Layout } from "../styles";

const Title = styled.h1`
  font-size: 3em;
  margin-bottom: 10px;
`;

const InfoDiv = styled.div`
  padding: 20px;
  background-color: white;
  margin: 10px;
  border-radius: 8px;
  width: 80%;
  -webkit-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  -moz-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  color: black;
`;

const ListItemNumber = styled.li`
  display: list-item;
  margin-left: 20px;
  list-style-position: inside;
  list-style-type: decimal;
`;

const ListItemBullet2 = styled.li`
  display: list-item;
  list-style-type: circle;
  margin-left: 80px;
`;

const ListItemBullet1 = styled.li`
  display: list-item;
  list-style-type: circle;
  margin-left: 40px;
`;

const Paragraph = styled.p`
  padding-top: 10px;
  color: gray;
  line-height: 120%;
`;

const LinkDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
  height: 10%;
  border-radius: 8px;
  background-color: var(--div1Blue);
  padding: 10px;
  margin: 10px;
  cursor: pointer;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
`;

function About() {
  return (
    <>
      <Layout>
        <Header />
        <Title>About the Lesson </Title>
        <InfoDiv>
          Lesson Summary
          <Paragraph>
            This lesson is intended for children aged 11-14 years old. The
            lesson teaches children the basics of machine learning through
            teaching them to develop one of the simplest machine learning
            algorithms: a decision tree classifier. Students are asked to help a
            robot learn to classify toys according to a category of their choice
            (for example outside vs. inside toys). In the process of doing so
            they learn how decision tree classifiers can be used in order for a
            computer (or in this case a robot) to learn to classify data into 2
            categories.
          </Paragraph>
        </InfoDiv>
        <InfoDiv>
          Lesson Objectives
          <Paragraph>
            The learning goals of this lesson are as follows:
            <ol>
              <ListItemNumber>
                The student can discuss the concepts of features and values and
                their use in generalization
              </ListItemNumber>
              <ListItemNumber>
                The student can differentiate between the concepts of induction
                and deduction and can explain how the learning algorithm makes
                use of these concepts
              </ListItemNumber>
              <ListItemNumber>
                The student is able to explain the concept of a decision tree
                classifier to others including:
              </ListItemNumber>
              <ul>
                <ListItemBullet2>
                  That in a learned decision tree different cases lead to
                  different decisions (root nodes) because the tree is being
                  traversed through the internal nodes differently
                </ListItemBullet2>
                <ListItemBullet2>
                  How during learning the information gain from each property
                  will affect the order of the decision nodes in the tree
                </ListItemBullet2>
                <ListItemBullet2>
                  Being able to identify the main elements of decision trees
                  including a leaf node, an internal node, a root node and a
                  branch
                </ListItemBullet2>
              </ul>
              <ListItemNumber>
                The student can explain the concept of accuracy in the context
                of a decision tree classifier
              </ListItemNumber>
            </ol>
          </Paragraph>
        </InfoDiv>
        <InfoDiv>
          Requirements
          <Paragraph>
            The lesson has the following technical requirements:
            <ul>
              <ListItemBullet1>A webcam</ListItemBullet1>
              <ListItemBullet1>Safari or Chrome</ListItemBullet1>
            </ul>
            Additionally, the following document needs to be printed out or
            readily available on an tablet/phone screen:
            <Link
              href="https://drive.google.com/file/d/1iXaEtT3IW16CEaZz6F1sdZhrVvVhrLSl/view?usp=sharing"
              target="_blank"
            >
              <LinkDiv>Yuki Lesson Toy Images</LinkDiv>
            </Link>
            The students will be asked to show the webcam of the laptop/computer
            these images and then choose which category they belong to on the
            website.
          </Paragraph>
        </InfoDiv>
      </Layout>
    </>
  );
}

export default About;
