import { ArrowBigRight, LucideEye } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { useNavigate } from "react-router-dom";

export default function SiteFeaturedProducts() {
  const navigate = useNavigate();
  return (
    <section className="py-5">
      <div className="py-4">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Featured products</h2>
          <Button variant="outline">
            View All Products <ArrowBigRight />{" "}
          </Button>
        </div>
        <p className="text-gray-700 font-bold">
          Discover amazing products from diverse categories
        </p>
      </div>
      <div>
        <div className="grid gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <Card
              key={`product+${i}`}
              onClick={() => navigate(`/product/${i}`)}
              className="cursor-pointer size-full overflow-hidden"
            >
              <CardHeader className="p-0 h-[200px]">
                <div className="h-full">
                  <img
                    src="/dummy4.jpg"
                    alt=""
                    className="h-full w-full rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="pt-4 pb-1">
                  <h2 className="font-bold text-xl">Product Name</h2>
                  <h3 className="font-bold text-gray-600 text-md">$100</h3>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button className="w-full">Add to Cart</Button>
                <Button>
                  <LucideEye />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
