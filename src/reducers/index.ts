import { combineReducers } from "redux";
import categories from "./categories";

const rootReducer = combineReducers({ categories: categories });
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
