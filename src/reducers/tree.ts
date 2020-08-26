import { TreeState } from "../types";

const initialState: TreeState = {
  isLoading: false,
};

const tree = (state = initialState, action: any): TreeState => {
  switch (action.type) {
    case "CREATE_TREE_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "CREATE_TREE_REJECTED":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case "CREATE_TREE_FULFILLED":
      return {
        ...state,
        isLoading: false,
      };
    case "PREDICT_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "PREDICT_REJECTED":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case "PREDICT_FULFILLED":
      return {
        ...state,
        error: undefined,
        prediction: action.payload.data.prediction,
        isLoading: false,
      };
  }
  return state;
};

export default tree;
