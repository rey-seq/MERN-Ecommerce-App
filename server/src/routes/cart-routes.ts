import { Router } from "express";
import * as cart from "../controllers/cart-controller";
import { AuthMiddleware } from "../middlewares";
export const cartRoute = Router();

cartRoute.post("/", AuthMiddleware, cart.AddToCart);
cartRoute.get("/", AuthMiddleware, cart.GetCartProduct);
cartRoute.delete("/", AuthMiddleware, cart.RemoveAllCartItems);
cartRoute.patch("/:productId", AuthMiddleware, cart.UpdateQuantity);
