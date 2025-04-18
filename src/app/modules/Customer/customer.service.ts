import prisma from "../../utils/prisma";
import { ICustomer } from "./customer.interface";


const createCustomerIntoDB = async (payload: ICustomer) => {
  const result = await prisma.customer.create({
    data: payload,
  });
  return result;
};

const getAllCustomerIntoDB = async () => {
  const result = await prisma.customer.findMany();
  return result;
};

const getSingleCustomerIntoDB = async (customerId: string) => {
  const result = await prisma.customer.findUniqueOrThrow({
    where: {
      customerId,
    },
  });
  return result;
};

const updateSingleCustomerIntoDB = async (
  customerId: string,
  payload: Partial<ICustomer>
): Promise<ICustomer | null> => {
  await prisma.customer.findUniqueOrThrow({
    where: {
      customerId,
    },
  });
  const result = await prisma.customer.update({
    where: {
      customerId,
    },
    data: payload,
  });
  return result;
};

const deleteCustomerIntoDB = async (
  customerId: string
) => {
  await prisma.customer.findUniqueOrThrow({
    where: {
      customerId,
    },
  });
  const result = await prisma.customer.delete({
    where: {
      customerId,
    },
  });
  return result;
};

export const customerServices = {
  createCustomerIntoDB,
  getAllCustomerIntoDB,
  getSingleCustomerIntoDB,
  updateSingleCustomerIntoDB,
  deleteCustomerIntoDB,
};
