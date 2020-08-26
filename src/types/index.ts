interface ICategories {
  category1: string;
  category2: string;
}

interface CategoriesState {
  categories: ICategories;
}

interface TreeState {
  isLoading: boolean;
  error?: any;
  prediction?: number[];
}

export type { ICategories, CategoriesState, TreeState };
