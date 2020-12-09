export interface ICategoriesData {
  categories: ICategories;
}

export interface ICategories {
  total: number;
  category: ICategory[];
}

export interface ICategory {
  title: string;
  alias: string;
  parent_categories: IParentCategory[];
}

export interface IParentCategory {
  title: string;
  alias: string;
}
