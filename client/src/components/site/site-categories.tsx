import { ArrowBigRight, Box } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { GetProductsDetailsByCategory } from "@/services/queries";
import { useNavigate } from "react-router-dom";

export default function SiteCategories() {
  const { data: categories } = GetProductsDetailsByCategory();
  const navigate = useNavigate();
  return (
    <section className="py-10">
      <div className="py-4">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Top Categories</h2>
          <Button variant="outline">
            View All Categories <ArrowBigRight />{" "}
          </Button>
        </div>
        <p className="text-gray-700 font-bold">
          Discover amazing products from diverse categories that cater to every
          taste and need.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {categories?.map((category) => (
          <Card
            onClick={() => navigate(`/category/${category.category.name}`)}
            className="cursor-pointer"
            key={category.category.name}
          >
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                {category.category.name}
              </CardTitle>
              <CardDescription className="font-bold text-sm">
                {category.category.description}
              </CardDescription>
            </CardHeader>
            <CardFooter className="gap-2">
              <Box size={20} />
              <p className="font-bold text-gray-400 text-sm gap-4">
                {category.productCount} products
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
