import { redisClient } from "../database/redis-connection";

export const storeRefreshToken = async (
  userId: string,
  refreshToken: string
) => {
  await redisClient.set(
    `refreshToken:${userId}`,
    refreshToken,
    "EX",
    24 * 60 * 60
  );
};
