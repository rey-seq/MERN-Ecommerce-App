import mongoose from "mongoose";
import { ICustomer } from "../types";

const customerSchema = new mongoose.Schema<ICustomer>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cartItems: [
    {
      quantity: {
        type: Number,
        default: 1,
      },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    },
  ],
  role: {
    type: String,
    enum: ["customer", "admin"],
    default: "customer",
  },
});

export const Customer = mongoose.model<ICustomer>("Customer", customerSchema);
