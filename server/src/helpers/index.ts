import { redisClient } from "../database/redis-connection";
import { Product } from "../models";

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

export const UpdatedFeaturedProductsCache = async () => {
  try {
    const featuredProducts = await Product.find({ isFeatured: true }).lean();
    await redisClient.set(
      "featured_products",
      JSON.stringify(featuredProducts)
    );
  } catch (error) {
    throw error;
  }
};
