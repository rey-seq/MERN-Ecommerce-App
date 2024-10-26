import { Router } from "express";
import * as coupon from "../controllers/coupon-controller";
import { AuthMiddleware } from "../middlewares";

export const couponRoute = Router();

couponRoute.get("/", AuthMiddleware, coupon.GetCoupon);
couponRoute.post("/validate", AuthMiddleware, coupon.ValidateCoupon);
