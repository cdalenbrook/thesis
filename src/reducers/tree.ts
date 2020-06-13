import { TreeState } from "../types";

const initialState: TreeState = {
  isLoading: false,
};

const tree = (state = initialState, action: any): TreeState => {
  switch (action.type) {
    case "TRAIN_TREE_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "TRAIN_TREE_REJECTED":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case "TRAIN_TREE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        data: action.payload["data"],
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
        isLoading: false,
        prediction: action.payload,
      };
  }
  return state;
};

export default tree;
