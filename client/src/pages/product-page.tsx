import SiteFeaturedProducts from "@/components/site/site-featured-products";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function ProductPage() {
  return (
    <section className="py-10">
      <div className="container mx-auto flex gap-10">
        <div className="flex-1">
          <img src="/dummy4.jpg" alt="" />
        </div>
        <div className="flex-1 space-y-10">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Electronic Granite Towels</h1>
            <h2>$100</h2>
            <p>Addidas</p>
          </div>
          <Separator />
          <div className="space-y-2">
            <p>74 in stock</p>
            <p>ratings</p>
            <p>increment decrement buttons</p>
            <div className="flex gap-3 items-center">
              <Button>Buy now</Button>
              <Button variant="outline">Add to cart</Button>
            </div>
          </div>
          <Separator />
          <div>
            <h1>Description</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              laboriosam tenetur magni quia excepturi? Aliquid sit consequuntur
              tempore magnam quis, facilis consectetur laudantium, cum
              laboriosam dolor possimus, vitae tenetur quas.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-10">
        <SiteFeaturedProducts />
      </div>
    </section>
  );
}
