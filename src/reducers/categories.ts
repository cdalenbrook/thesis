import { CategoriesState } from "../types";

const initialState: CategoriesState = {
  categories: { category1: "category1", category2: "category2" },
};

const categories = (state = initialState, action: any): CategoriesState => {
  switch (action.type) {
    case "NAME_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default categories;
