import React from "react";
import styled from "styled-components";
import Header from "../components/header";
import { Layout, Button } from "../styles";
import { Routes } from "../router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ICategories } from "../types";
import { useDispatch } from "react-redux";
import { nameCategories } from "../actions";
import { useHistory } from "react-router-dom";

const Text = styled.h1`
  font-size: 2.5em;
  padding: 30px;
`;

const Input = styled.input`
  height: 50px;
  padding: 10px;
  margin: 20px;
  border-radius: 8px;
  border: none;
  font-family: Futura;
  font-size: 1em;
  outline: none;
`;

const Label = styled.label`
  font-size: 1.5em;
`;

const Form = styled.form`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const InfoDiv = styled.div`
  font-size: 1.25em;
  padding-bottom: 20px;
`;

const ErrorDiv = styled.div`
  height: 20px;
  margin-bottom: 20px;
  color: #ff6961;
  font-weight: bold;
`;

const CategorySchema = Yup.object<ICategories>().shape({
  category1: Yup.string()
    .min(2, `Category must be at least 2 characters long`)
    .matches(/^[a-zA-Z]+$/)
    .required("Required"),
  category2: Yup.string()
    .min(2, `Category must be at least 2 characters long`)
    .matches(/^[a-zA-Z]+$/)
    .required("Required"),
});

function InsertCategories() {
  const dispatch = useDispatch();
  const router = useHistory();

  const formik = useFormik<ICategories>({
    initialValues: {
      category1: "",
      category2: "",
    },
    validationSchema: CategorySchema,
    onSubmit: (values) => {
      dispatch(nameCategories(values));
    },
  });

  const handleNext = (e: any) => {
    e.preventDefault();
    if (!formik.isValid) {
      //handle not all toys were given
      alert(`Please submit your categories!`);
    } else {
      // submit the form
      formik.handleSubmit(e);
      //go to next page
      router.push(nextRoute);
    }
  };

  const previousRoute = Routes.getStarted;
  const helpRoute = Routes.home;
  const nextRoute = Routes.webcam1;

  return (
    <>
      <Layout>
        <Header />
        <Text> Enter your chosen categories: </Text>

        <Form onSubmit={formik.handleSubmit}>
          <Label>Category 1:</Label>
          <Input
            type="text"
            id="category1"
            name="category1"
            autoComplete="off"
            onChange={formik.handleChange}
            value={formik.values.category1}
          />
          <ErrorDiv>
            <h1>{formik.touched && formik.errors.category1}</h1>
          </ErrorDiv>
          <Label>Category 2:</Label>
          <Input
            type="text"
            id="category2"
            name="category2"
            autoComplete="off"
            onChange={formik.handleChange}
            value={formik.values.category2}
          />
          <ErrorDiv>
            <h1>{formik.touched && formik.errors.category2}</h1>
          </ErrorDiv>
          <InfoDiv>
            On the next page show the webcam ONLY 12 of the 14 toys in the
            group. Once the webcam has recognized a toy (shows the toy name and
            properties) specify which of your 2 categories that toy belongs to
            by clicking on the corresponding button and then move on to the next
            toy.
          </InfoDiv>
          <ButtonDiv>
            <Button
              height="120%"
              onClick={() => {
                router.push(previousRoute);
              }}
            >
              Back
            </Button>
            <Button height="120%" onClick={() => router.push(helpRoute)}>
              Help
            </Button>
            <Button onClick={handleNext}>Next</Button>
          </ButtonDiv>
        </Form>
      </Layout>
    </>
  );
}

export default InsertCategories;
