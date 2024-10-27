import SiteNavLinks from "./site-navlinks";
import SiteLogo from "./site-logo";
import SiteAuthButtons from "./site-auth-buttons";

export default function SiteHeader() {
  return (
    <header className="border-b-[1px]">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div className="flex items-center gap-20">
          <SiteLogo />
          <SiteNavLinks />
        </div>
        <SiteAuthButtons />
      </div>
    </header>
  );
}
