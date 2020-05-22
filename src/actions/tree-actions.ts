import { ICategories } from "../types";
import { ToysAndVals } from "../data/toys";
import axios from "axios";

export const trainTree = (categories: ICategories, toys: ToysAndVals) => ({
  type: "TRAIN_TREE",
  payload: axios.post("https://yuki-server-thesis.herokuapp.com/make-tree", {
    category: [categories.category1, categories.category2],
    data: toys,
  }),
});
