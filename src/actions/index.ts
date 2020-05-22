import { ICategories } from "../types";

export const nameCategories = (categories: ICategories) => ({
  type: "NAME_CATEGORIES",
  payload: categories,
});

export * from "./tree-actions";
