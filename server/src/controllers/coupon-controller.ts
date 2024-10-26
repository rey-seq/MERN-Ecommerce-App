import { Request, Response } from "express";
import { AppError, AsyncWrapper } from "../utils";
import { Coupon } from "../models";
import { ErrorMessages, HttpStatusCode } from "../constants";

export const GetCoupon = AsyncWrapper(async (req: Request, res: Response) => {
  const loggedInUser = req.user._id;

  const existingCoupon = await Coupon.findOne({
    userId: loggedInUser,
    isActive: true,
  });

  if (existingCoupon) {
    res.status(HttpStatusCode.OK).json({
      success: true,
      data: existingCoupon,
    });
  } else {
    res.status(HttpStatusCode.OK).json({
      success: true,
      data: null,
    });
  }
});

export const ValidateCoupon = AsyncWrapper(
  async (req: Request, res: Response) => {
    const { code } = req.body;
    const loggedInUser = req.user._id;

    const existingCoupon = await Coupon.findOne({
      code,
      userId: loggedInUser,
      isActive: true,
    });

    if (!existingCoupon) {
      throw new AppError(
        ErrorMessages.INVALID_COUPON,
        HttpStatusCode.BAD_REQUEST
      );
    }

    if (existingCoupon.expiratonDate < new Date()) {
      existingCoupon.isActive = false;
      await existingCoupon.save();
      throw new AppError(
        ErrorMessages.COUPON_EXPIRED,
        HttpStatusCode.BAD_REQUEST
      );
    }

    res.status(HttpStatusCode.OK).json({
      success: true,
      data: {
        code: existingCoupon.code,
        discountPercentage: existingCoupon.discountPercentage,
      },
    });
  }
);
