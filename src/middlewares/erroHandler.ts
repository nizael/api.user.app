import { Prisma } from "@prisma/client";
import { ErrorRequestHandler } from "express";
import AppError from "../error/appError";
export const errorHandler: ErrorRequestHandler = (error, _, res, __) => {

  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: error.statusMessage,
      message: error.message,
      details: error.details,
    });
  }

  if (error instanceof Error) {
    return res.status(400).json({
      status: "error",
      message: error.message
    })
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    return res.status(400).json({
      status: "error",
      message: error.message
    })
  }

  return res.status(500).json({
    status: "error",
    message: 'Internal server error'
  })
}