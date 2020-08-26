import { combineReducers } from "redux";
import categories from "./categories";
import tree from "./tree";
import { CategoriesState, TreeState } from "../types";
import {
  FirebaseReducer,
  FirestoreReducer,
  firebaseReducer,
} from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

export interface RootState {
  categories: CategoriesState;
  tree: TreeState;
  firebase: FirebaseReducer.Reducer;
  firestore: FirestoreReducer.Reducer;
}

const rootReducer = () =>
  combineReducers({
    categories: categories,
    tree: tree,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
  });
export default rootReducer;
// export type RootState = ReturnType<typeof rootReducer>;
