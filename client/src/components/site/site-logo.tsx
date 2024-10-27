import { ShoppingBagIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function SiteLogo() {
  return (
    <Link to={"/"} className="flex items-center gap-2">
      <ShoppingBagIcon />
      <h1 className="font-bold uppercase tracking-widest">One Stop</h1>
    </Link>
  );
}
