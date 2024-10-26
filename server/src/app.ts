import express, { type Application } from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import cors from "cors";
import { ParsedEnvVariables } from "./config";
import { ErrorMiddleware } from "./middlewares";
import { authRoute, cartRoute, couponRoute, productRoute } from "./routes";

const app: Application = express();

app.use(helmet());
app.use(
  cors({
    origin: ParsedEnvVariables.CORS_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.disable("x-powered-by");

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/coupon", couponRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/cart", cartRoute);

app.use(ErrorMiddleware);

export default app;
