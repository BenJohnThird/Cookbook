export interface ProductModel {
  uuid: string;
  title: string;
  description: string;
  images: ProductImages;
  servings: number;
  prepTime: number;
  cookTime: number;
  postDate: string;
  editDate: string;
  ingredients: Ingredients[];
  directions: Directions[];
}

export interface ProductImages {
  full?: string;
  medium?: string;
  small?: string;
}

export interface Ingredients {
  uuid: string;
  amount: number;
  measurement: string;
  name: string;
}

export interface Directions {
  instructions: string;
  optional: boolean;
}
