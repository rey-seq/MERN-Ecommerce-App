import redis from "ioredis";
import { logger } from "../utils";

export const redisClient = new redis();

redisClient.on("connect", () => {
  logger.info("Redis is connected.");
});

redisClient.on("disconnect", () => {
  logger.warn("Redis is disconnected.");
});

redisClient.on("error", (error) => {
  logger.error("Redis error:", error);
});
