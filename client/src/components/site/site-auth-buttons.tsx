import { ShoppingCartIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function SiteAuthButtons() {
  return (
    <div className="flex gap-3 items-center">
      <Button variant="outline">
        <ShoppingCartIcon />
      </Button>
      <Button variant={"outline"}>Sign In</Button>
      <Button>Sign Up</Button>
    </div>
  );
}
