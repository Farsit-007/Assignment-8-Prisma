import { z } from "zod";

export const customerValidation = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required" }),
    email: z
      .string({ required_error: "Email is required" })
      .email("This is not a valid email."),
    phone: z.string({ required_error: "Phone is required" }).min(11).max(11),
  }),
});


export const updateCustomerValidation = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required" }).optional(),
    email: z
      .string({ required_error: "Email is required" })
      .email("This is not a valid email.").optional(),
    phone: z.string({ required_error: "Phone is required" }).min(11).max(11).optional(),
  }),
});

