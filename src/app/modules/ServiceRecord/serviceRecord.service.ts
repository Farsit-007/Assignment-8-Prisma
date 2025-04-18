import prisma from "../../utils/prisma";
import { IRecord } from "./serviceRecord.interface";

const createRecrdIntoDB = async (payload: IRecord) => {
  await prisma.bike.findUniqueOrThrow({
    where: {
      bikeId: payload.bikeId,
    },
  });
  const result = await prisma.serviceRecord.create({
    data: payload,
  });
  return result;
};

const getAllRecordIntoDB = async () => {
  const result = await prisma.serviceRecord.findMany();
  return result;
};

const getSingleRecordIntoDB = async (serviceId: string) => {
  const result = await prisma.serviceRecord.findUniqueOrThrow({
    where: {
      serviceId,
    },
  });
  return result;
};

const updateSingleRecordIntoDB = async (
  serviceId: string,
  payload: Partial<IRecord>
) => {
  await prisma.serviceRecord.findUniqueOrThrow({
    where: { serviceId },
  });

  if (payload.status === undefined) {
    payload.status = "done";
  }
  if (payload.completionDate === undefined) {
    payload.completionDate = new Date();
  }
  const result = await prisma.serviceRecord.update({
    where: { serviceId },
    data: payload,
  });

  return result;
};

const overdueRecordIntoDB = async () => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  const result = await prisma.serviceRecord.findMany({
    where: {
      AND: [
        {
          status: {
            in: ["pending", "in_progress"],
          },
        },
        {
          serviceDate: {
            lt: sevenDaysAgo,
          },
        },
      ],
    },
  });

  return result;
};

export const recordServices = {
  createRecrdIntoDB,
  getAllRecordIntoDB,
  getSingleRecordIntoDB,
  updateSingleRecordIntoDB,
  overdueRecordIntoDB,
};
