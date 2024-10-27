import SiteCategories from "@/components/site/site-categories";
import SiteFeaturedProducts from "@/components/site/site-featured-products";
import SiteHero from "@/components/site/site-hero";
import SiteServices from "@/components/site/site-services";

export default function HomePage() {
  return (
    <main className="container mx-auto">
      <SiteHero />
      <SiteFeaturedProducts />
      <SiteCategories />
      <SiteServices />
    </main>
  );
}
