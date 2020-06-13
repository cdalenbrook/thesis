import { ICategories, TreeState } from "../types";
import { ToysAndVals } from "../data/toys";
import axios from "axios";

export const trainTree = (categories: ICategories, toys: ToysAndVals) => ({
  type: "TRAIN_TREE",
  payload: axios.post("https://yuki-server-thesis.herokuapp.com/make-tree", {
    dev: process.env.NODE_ENV === "development",
    category: [categories.category1, categories.category2],
    data: toys,
  }),
});

export const predictItem = (toyId: string, state: TreeState) => {
  alert(
    JSON.stringify({
      toy_id: toyId,
      ...state.data,
    })
  );
  return {
    type: "PREDICT",
    payload: axios.post(
      "https://yuki-server-thesis.herokuapp.com/predict-category",
      {
        toy_id: toyId,
        ...state.data,
      }
    ),
  };
};
