import { Request, Response } from "express";
import { AppError, AsyncWrapper } from "../utils";
import { ErrorMessages, HttpStatusCode, SuccessMessages } from "../constants";
import { Product } from "../models";
import { redisClient } from "../database/redis-connection";
import cloudinary from "../lib/cloudinary";
import { UpdatedFeaturedProductsCache } from "../helpers";

export const GetAllProducts = AsyncWrapper(
  async (req: Request, res: Response) => {
    const products = await Product.find({});

    res.status(HttpStatusCode.OK).json({
      success: true,
      data: products,
    });
  }
);

export const GetFeaturedProducts = AsyncWrapper(
  async (req: Request, res: Response) => {
    const cachedFeaturedProducts = await redisClient.get("featured_products");

    if (cachedFeaturedProducts) {
      return res.status(HttpStatusCode.OK).json({
        success: true,
        data: JSON.parse(cachedFeaturedProducts),
      });
    }

    const featuredProducts = await Product.find({ isFeatured: true }).lean();

    if (!featuredProducts) {
      throw new AppError(
        ErrorMessages.NO_FEATURED_PRODUCTS_FOUND,
        HttpStatusCode.BAD_REQUEST
      );
    }

    await redisClient.set(
      "featured_products",
      JSON.stringify(featuredProducts)
    );

    res.status(HttpStatusCode.OK).json({
      success: true,
      data: featuredProducts,
    });
  }
);

export const CreateProduct = AsyncWrapper(
  async (req: Request, res: Response) => {
    const { name, description, price, image, category, categoryDescription } =
      req.body;

    let cloudinaryResponse = null;

    if (image) {
      cloudinaryResponse = await cloudinary.uploader.upload(image, {
        folder: "ecommerce_products",
      });
    }
    const newProduct = await Product.create({
      name,
      description,
      price,
      image: cloudinaryResponse?.secure_url
        ? cloudinaryResponse.secure_url
        : "",
      category,
      categoryDescription,
    });

    res.status(HttpStatusCode.CREATED).json({
      success: true,
      data: newProduct,
    });
  }
);

export const DeleteProduct = AsyncWrapper(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const existingProduct = await Product.findById(id);

    if (!existingProduct) {
      throw new AppError(
        ErrorMessages.PRODUCT_NOT_FOUND,
        HttpStatusCode.BAD_REQUEST
      );
    }
    if (existingProduct.image) {
      const publicId = existingProduct.image.split("/").pop()?.split(".")[0];
      await cloudinary.uploader.destroy(`ecommerce_products/${publicId}`);
    }

    await Product.findByIdAndDelete(id);

    res.status(HttpStatusCode.OK).json({
      success: true,
      message: SuccessMessages.PRODUCT_DELETED_SUCCESS,
    });
  }
);

export const GetProductsByCategory = AsyncWrapper(
  async (req: Request, res: Response) => {
    const { category } = req.params;

    const products = await Product.find({ category });

    res.status(HttpStatusCode.OK).json({
      success: true,
      data: products,
    });
  }
);

export const ToggleFeaturedProduct = AsyncWrapper(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const existingProduct = await Product.findById(id);

    if (existingProduct) {
      existingProduct.isFeatured = !existingProduct.isFeatured;
      await existingProduct.save();
      await UpdatedFeaturedProductsCache();
      res.status(HttpStatusCode.OK).json({
        success: true,
        data: existingProduct,
      });
    }
  }
);

export const GetRecommendedProducts = AsyncWrapper(
  async (req: Request, res: Response) => {
    const products = await Product.aggregate([
      { $sample: { size: 4 } },
      { $project: { _id: 1, name: 1, image: 1, description: 1, price: 1 } },
    ]);

    res.status(HttpStatusCode.OK).json({
      success: true,
      data: products,
    });
  }
);

export const GetTotalProductsByCategory = AsyncWrapper(
  async (req: Request, res: Response) => {
    const categories = await Product.aggregate([
      {
        $group: {
          _id: {
            name: "$category",
            description: "$categoryDescription",
          },
          productCount: { $sum: 1 },
        },
      },
      {
        $sort: { productCount: -1 },
      },
      {
        $limit: 8,
      },
      {
        $project: {
          _id: 0,
          category: "$_id",
          productCount: 1,
        },
      },
    ]);

    res.status(HttpStatusCode.OK).json({
      success: true,
      data: categories,
    });
  }
);
