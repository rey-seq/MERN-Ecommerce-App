import { useQuery } from "@tanstack/react-query";
import { CategoriesDetails } from "../apis";
import { VerifyAuthApi } from "../apis/auth-api";

export function GetProductsDetailsByCategory() {
  return useQuery({
    queryKey: ["categories-details"],
    queryFn: CategoriesDetails,
  });
}

export function useVerifyAuthApi() {
  return useQuery({
    queryKey: ["verify-auth"],
    queryFn: VerifyAuthApi,
  });
}
