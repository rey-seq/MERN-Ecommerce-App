interface ICategoryResponse {
  productCount: number;
  category: {
    name: string;
    description: string;
  };
}

export const CategoriesDetails = async (): Promise<ICategoryResponse[]> => {
  const response = await fetch(
    "http://localhost:3000/api/v1/product/product-count",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  return data.data;
};
