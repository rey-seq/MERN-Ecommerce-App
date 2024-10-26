import express, { type Application } from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import cors from "cors";
import { ParsedEnvVariables } from "./config";
import { ErrorMiddleware } from "./middlewares";

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

app.use(ErrorMiddleware);

export default app;
