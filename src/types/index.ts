interface ICategories {
  category1: string;
  category2: string;
}

interface CategoriesState {
  categories: ICategories;
}

interface TreeState {
  sending: boolean;
  trainedTreeReceived: boolean;
  tree: any;
}

export type { ICategories, CategoriesState, TreeState };
