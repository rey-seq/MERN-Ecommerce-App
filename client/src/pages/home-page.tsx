import SiteTopCategories from "@/components/site/site-categories";
import SiteHero from "@/components/site/site-hero";
import SiteServices from "@/components/site/site-services";

export default function HomePage() {
  return (
    <>
      <SiteHero />
      <SiteServices />
      <SiteTopCategories />
    </>
  );
}
