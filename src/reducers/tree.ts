import { TreeState } from "../types";

const initialState: TreeState = {
  sending: false,
  trainedTreeReceived: false,
  tree: "",
};

const categories = (state = initialState, action: any): TreeState => {
  return state;
};

export default categories;
