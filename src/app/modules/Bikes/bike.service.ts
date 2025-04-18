import prisma from "../../utils/prisma";
import { IBike } from "./bike.interface";

const createBikeIntoDB = async (payload: IBike) => {
  await prisma.customer.findUniqueOrThrow({
    where: {
      customerId: payload.customerId,
    },
  });
  const result = await prisma.bike.create({
    data: payload,
  });
  return result;
};

const getAllBikedIntoDB = async () => {
  const result = await prisma.bike.findMany();
  return result;
};

const getSingleBikeIntoDB = async (bikeId: string) => {
  const result = await prisma.bike.findUniqueOrThrow({
    where: {
      bikeId,
    },
  });
  return result;
};


export const bikeServices = {
  createBikeIntoDB,
  getAllBikedIntoDB,
  getSingleBikeIntoDB
};
