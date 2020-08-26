import { ICategories } from "../types";
import { ToysAndVals } from "../data/toys";
import axios from "axios";
const baseUrl = "https://decision-tree-spacwb4zba-uc.a.run.app";

export const trainTree = (
  session_id: string,
  categories: ICategories,
  toys: ToysAndVals
) => ({
  type: "CREATE_TREE",
  payload: axios.post(`${baseUrl}/create-tree`, {
    id: session_id,
    category: [categories.category1, categories.category2],
    data: toys,
  }),
});

export const predictItem = (session_id: string, toyId: string) => {
  return {
    type: "PREDICT",
    payload: axios.post(`${baseUrl}/predict`, {
      id: session_id,
      toy_id: toyId,
    }),
  };
};
