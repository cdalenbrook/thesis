import { combineReducers } from "redux";
import categories from "./categories";
import tree from "./tree";

const rootReducer = combineReducers({ categories: categories, tree: tree });
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
