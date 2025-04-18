"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCustomerValidation = exports.customerValidation = void 0;
const zod_1 = require("zod");
exports.customerValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "Name is required" }),
        email: zod_1.z
            .string({ required_error: "Email is required" })
            .email("This is not a valid email."),
        phone: zod_1.z.string({ required_error: "Phone is required" }).min(11).max(11),
    }),
});
exports.updateCustomerValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "Name is required" }).optional(),
        email: zod_1.z
            .string({ required_error: "Email is required" })
            .email("This is not a valid email.").optional(),
        phone: zod_1.z.string({ required_error: "Phone is required" }).min(11).max(11).optional(),
    }),
});
