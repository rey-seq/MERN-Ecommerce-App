import { Link } from "react-router-dom";

const navLinks = [
  {
    name: "Mens",
    path: "/category/mens",
  },
  {
    name: "Womens",
    path: "/category/womens",
  },
  {
    name: "Kids",
    path: "/category/kids",
  },
];

export default function SiteNavLinks() {
  return (
    <div className="hidden md:flex gap-6 items-center">
      {navLinks.map((link) => (
        <Link to={link.path} className="font-bold tracking-wide">
          {link.name}
        </Link>
      ))}
    </div>
  );
}
