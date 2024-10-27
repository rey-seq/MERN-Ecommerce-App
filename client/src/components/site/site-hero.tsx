import { Button } from "../ui/button";

export default function SiteHero() {
  return (
    <section className="flex h-[40vh] w-full items-center justify-center">
      <div className="space-y-5 text-center">
        <h1 className="text-5xl font-bold">
          Your One-Stop Shopping Destination
        </h1>
        <p className="text-gray-500 font-bold text-md w-3/5 mx-auto leading-5 tracking-wider">
          Explore a world of fashion, where every click brings you the latest
          trends and timeless classics to express your unique style.
        </p>
        <div className="space-x-3">
          <Button>Shop Now</Button>
          <Button variant="outline">Browse Collections</Button>
        </div>
      </div>
    </section>
  );
}
