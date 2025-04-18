import { error } from "console";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
export const globalErrorHandler = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: err.name || "Something went wrong!",
    error: err,
  });
};
