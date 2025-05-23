import { z } from "zod";

export const bikeValidation = z.object({
  body: z.object({
    brand: z.string({ required_error: "Brand is required" }),
    model : z.string({ required_error: "Model is required" }),
    year : z.number({ required_error: "Year is required" }),
    customerId : z.string({ required_error: "Customer id is required" }),
  }),
});


