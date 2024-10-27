import SiteFooterLinks from "./site-footerlinks";
import SiteLogo from "./site-logo";

export default function SiteFooter() {
  return (
    <footer className="border-t-[1px]">
      <div className="container mx-auto space-y-5 py-5">
        <SiteLogo />
        <SiteFooterLinks />
        <div>
          <p className="text-gray-500 font-bold">
            &copy; {new Date().getFullYear()} One Stop Store
          </p>
        </div>
      </div>
    </footer>
  );
}
