// ====== USER PARAMS
export type CreateUserParams = {
  clerkId: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  photo: string;
};

export type UpdateUserParams = {
  firstName: string;
  lastName: string;
  username: string;
  photo: string;
};

// ====== Recipe PARAMS
export type CreateRecipeParams = {
  userId: string;
  recipe: {
    title: string;
    description: string;
    ingredients: string;
    prepTime: string;
    totalTime: string;
    allergy: string;
    imageUrl: string;
    createdAt: Date;
    categoryId: string;
    url: string;
    author: string;
  };
  path: string;
};

export type UpdateRecipeParams = {
  userId: string;
  event: {
    _id: string;
    title: string;
    imageUrl: string;
    description: string;
    ingredients: string;
    prepTime: string;
    totalTime: string;
    allergy: string;
    categoryId: string;
    url: string;
  };
  path: string;
};

export type DeleteRecipeParams = {
  eventId: string;
  path: string;
};

export type GetAllRecipesParams = {
  query: string;
  category: string;
  limit: number;
  page: number;
};

export type GetRecipesByUserParams = {
  userId: string;
  limit?: number;
  page: number;
};

export type GetRelatedRecipesByCategoryParams = {
  categoryId: string;
  eventId: string;
  limit?: number;
  page: number | string;
};

export type Recipe = {
  _id: string;
  title: string;
  description: string;
  prepTime: string;
  totalTime: string;
  allergy: string;
  imageUrl: string;
  url: string;
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  category: {
    _id: string;
    name: string;
  };
};

// ====== CATEGORY PARAMS
export type CreateCategoryParams = {
  categoryName: string;
};

// ====== ORDER PARAMS
export type CheckoutOrderParams = {
  recipeTitle: string;
  recipeId: string;
  price: string;
  isFree: boolean;
  buyerId: string;
};

export type CreateOrderParams = {
  stripeId: string;
  eventId: string;
  buyerId: string;
  totalAmount: string;
  createdAt: Date;
};

export type GetOrdersByRecipeParams = {
  eventId: string;
  searchString: string;
};

export type GetOrdersByUserParams = {
  userId: string | null;
  limit?: number;
  page: string | number | null;
};

// ====== URL QUERY PARAMS
export type UrlQueryParams = {
  params: string;
  key: string;
  value: string | null;
};

export type RemoveUrlQueryParams = {
  params: string;
  keysToRemove: string[];
};

export type SearchParamProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
