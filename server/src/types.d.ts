import { Document, ObjectId } from "mongoose";

interface CartItems {
  quantity: number;
  product: ObjectId;
}

export interface ICustomer extends Document {
  name: string;
  email: string;
  password: string;
  cartItems: CartItems[];
  role: "customer" | "admin";
}

export interface IProduct extends Document {
  name: string;
  slug: string;
  price: number;
  description: string;
  image: string;
  category: string;
  isFeatured: boolean;
}

export interface ICoupon extends Document {
  code: string;
  discountPercentage: number;
  expiratonDate: Date;
  isActive: boolean;
  userId: ObjectId;
}

type JWTPayloadType = Omit<ICustomer, "password">;

declare global {
  namespace Express {
    interface Request {
      user: JWTPayloadType;
    }
  }
}
