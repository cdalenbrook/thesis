import React from "react";
import styled from "styled-components";
import Header from "../components/header";
import { Layout, Button } from "../styles";
import BackHelpNext from "../components/back-help-next";
import { Routes } from "../router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ICategories } from "../types";
import { useSelector, useDispatch } from "react-redux";
import { nameCategories } from "../actions";

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

const CategorySchema = Yup.object<ICategories>().shape({
  category1: Yup.string()
    .matches(/^[a-zA-Z]+$/)
    .required("Required"),
  category2: Yup.string()
    .matches(/^[a-zA-Z]+$/)
    .required("Required"),
});

function InsertCategories() {
  const dispatch = useDispatch();

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
          <Label>Category 2:</Label>
          <Input
            type="text"
            id="category2"
            name="category2"
            autoComplete="off"
            onChange={formik.handleChange}
            value={formik.values.category2}
          />
          <button type="submit"> Done </button>
        </Form>
        <BackHelpNext
          previousRoute={Routes.getStarted}
          helpRoute={Routes.home}
          nextRoute={Routes.webcam1}
        />
      </Layout>
    </>
  );
}

export default InsertCategories;
