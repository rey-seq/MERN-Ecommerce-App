import { useQuery } from "@tanstack/react-query";
import { CategoriesDetails } from "../apis";

export function GetProductsDetailsByCategory() {
  return useQuery({
    queryKey: ["categories-details"],
    queryFn: CategoriesDetails,
  });
}
