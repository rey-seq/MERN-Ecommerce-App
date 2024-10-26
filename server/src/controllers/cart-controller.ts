import { Request, Response } from "express";
import { AsyncWrapper } from "../utils";
import { Product } from "../models";

export const GetCartProduct = AsyncWrapper(
  async (req: Request, res: Response) => {
    const user = req.user;
    const products = await Product.find({ _id: { $in: user.cartItems } });

    const cartItems = products.map((product) => {
      const item = req.user.cartItems.find(
        (cartItem: any) => cartItem.id === product.id
      );
      return { ...product.toJSON(), quantity: item?.quantity };
    });

    res.status(200).json({
      success: true,
      data: cartItems,
    });
  }
);

export const AddToCart = AsyncWrapper(async (req: Request, res: Response) => {
  const { productId } = req.body;
  const user = req.user;

  const existingItems = user.cartItems.find(
    (item: any) => item.id === productId
  );

  if (existingItems) {
    existingItems.quantity = existingItems.quantity + 1;
  } else {
    user.cartItems.push(productId);
  }

  await user.save();
  res.status(200).json({
    success: true,
    data: user.cartItems,
  });
});

export const RemoveAllCartItems = AsyncWrapper(
  async (req: Request, res: Response) => {
    const { productId } = req.body;
    const user = req.user;

    if (!productId) {
      user.cartItems = [];
    } else {
      user.cartItems = user.cartItems.filter(
        (item: any) => item.id !== productId
      );
    }
    await user.save();
    res.status(200).json({
      success: true,
      data: user.cartItems,
    });
  }
);

export const UpdateQuantity = AsyncWrapper(
  async (req: Request, res: Response) => {
    const { quantity } = req.body;
    const { productId } = req.params;
    const user = req.user;

    const existingItem = user.cartItems.find(
      (item: any) => item.id === productId
    );

    if (existingItem) {
      if (quantity === 0) {
        user.cartItems = user.cartItems.filter(
          (item: any) => item.id !== productId
        );
        await user.save();
        return res.status(200).json({
          success: true,
          data: user.cartItems,
        });
      }

      existingItem.quantity = quantity;
      await user.save();
      res.status(200).json({
        success: true,
        data: user.cartItems,
      });
    }
  }
);
