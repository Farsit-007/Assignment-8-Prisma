"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateServiceRecordValidation = exports.serviceRecordValidation = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
exports.serviceRecordValidation = zod_1.z.object({
    body: zod_1.z.object({
        bikeId: zod_1.z.string({ required_error: "Bike Id required" }),
        serviceDate: zod_1.z.string({ required_error: "Service Date Id required" }),
        description: zod_1.z.string({ required_error: "Service Date Id required" }),
        status: zod_1.z.enum(Object.values(client_1.Status)).default("pending"),
    }),
});
exports.updateServiceRecordValidation = zod_1.z.object({
    body: zod_1.z.object({
        completionDate: zod_1.z.string().optional(),
        status: zod_1.z.enum(Object.values(client_1.Status)).optional(),
    }),
});
