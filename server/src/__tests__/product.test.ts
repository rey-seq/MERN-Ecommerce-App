import app from "../app";
import request from "supertest";
import { Product } from "../models";
import { redisClient } from "../database/redis-connection";

jest.mock("../models/product-model");
jest.mock("ioredis");

describe("Product Controller testing", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe("Get All Products", () => {
    it("Should return empty array if there are no products", async () => {
      (Product.find as jest.Mock).mockResolvedValue([]);
      const response = await request(app).get("/api/v1/product/all");
      expect(response.status).toBe(200);
      expect(response.body.data).toBeInstanceOf(Array);
    });
    it("Should return array of products", async () => {
      const mockProducts = [
        {
          _id: "mockId",
          name: "mockName",
          description: "mockDescription",
          price: "mockPrice",
          image: "mockImage",
          category: "mockCategory",
          isFeatured: "mockIsFeatured",
        },
      ];
      (Product.find as jest.Mock).mockResolvedValue(mockProducts);
      const response = await request(app).get("/api/v1/product/all");
      expect(response.status).toBe(200);
      expect(response.body.data).toStrictEqual(mockProducts);
    });
  });

  describe("Get Featured Products", () => {
    it("should return data from redis cache", async () => {
      const mockProducts = [
        {
          _id: "mockId",
          name: "mockName",
          description: "mockDescription",
          price: "mockPrice",
          image: "mockImage",
          category: "mockCategory",
          isFeatured: "mockIsFeatured",
        },
      ];
      (redisClient.get as jest.Mock).mockResolvedValue(
        JSON.stringify(mockProducts)
      );
      const response = await request(app).get("/api/v1/product/featured");
      expect(response.status).toBe(200);
      expect(response.body.data).toStrictEqual(mockProducts);
    });
    it("should return data from database if redis cache is empty", async () => {
      const mockProducts = [
        {
          _id: "mockId",
          name: "mockName",
          description: "mockDescription",
          price: "mockPrice",
          image: "mockImage",
          category: "mockCategory",
          isFeatured: "mockIsFeatured",
        },
      ];
      const mockQuery = {
        lean: jest.fn().mockReturnValue(Promise.resolve(mockProducts)), // Mock `lean` to return a promise
      };
      (redisClient.get as jest.Mock).mockResolvedValue(null);
      (Product.find as jest.Mock).mockReturnValue(mockQuery);
      const response = await request(app).get("/api/v1/product/featured");

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toStrictEqual(mockProducts);
    });
  });

  describe("Get Products By Category", () => {
    it("should return empty array if there are no products", async () => {
      (Product.find as jest.Mock).mockReturnValue([]);
      const response = await request(app).get(
        "/api/v1/product/all-category/mockCategory"
      );

      expect(response.status).toBe(200);
      expect(response.body.data).toBeInstanceOf(Array);
    });
    it("should return array of products", async () => {
      const mockProducts = [
        {
          _id: "mockId",
          name: "mockName",
          description: "mockDescription",
          price: "mockPrice",
          image: "mockImage",
          category: "mockCategory",
          isFeatured: "mockIsFeatured",
        },
      ];
      (Product.find as jest.Mock).mockReturnValue(mockProducts);
      const response = await request(app).get(
        "/api/v1/product/all-category/mockCategory"
      );
      expect(response.status).toBe(200);
      expect(response.body.data).toStrictEqual(mockProducts);
    });
  });
});
