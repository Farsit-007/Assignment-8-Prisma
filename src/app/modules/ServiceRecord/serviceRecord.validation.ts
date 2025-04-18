import { Status } from "@prisma/client";
import { z } from "zod";


export const serviceRecordValidation = z.object({
  body: z.object({
    bikeId: z.string({ required_error: "Bike Id required" }),
    serviceDate: z.string({ required_error: "Service Date Id required" }),
    description: z.string({ required_error: "Service Date Id required" }),
    status: z.enum(Object.values(Status) as [string, ...string[]]).default("pending"),
  }),
});

export const updateServiceRecordValidation = z.object({
  body: z.object({
    completionDate: z.string().optional(),
    status: z.enum(Object.values(Status) as [string, ...string[]]).optional(),
  }),
});
