import { z } from "zod";

export const productSchema = z.object({
  body: z.object({
    name: z.string().min(1, "product name is required"),
    description: z.string().min(1, "description is required").trim(),
    price: z.number().min(0, "price must be greater than 0"),
    image: z.string().optional(),
    category: z.string().min(1, "category is required").trim(),
  }),
});
