import express from "express";
import { validateRequest } from "../../middlewares/validationRequest";
import { customerValidation, updateCustomerValidation } from "./customer.validation";
import { customerControllers } from "./customer.controller";


const router = express.Router()

router.post('/',validateRequest(customerValidation),customerControllers.createCustomer)
router.get('/',customerControllers.getAllCustomer)
router.get('/:customerId',customerControllers.getSingleCustomer)
router.put('/:customerId',validateRequest(updateCustomerValidation),customerControllers.updateSingleCustomer)
router.delete('/:customerId',customerControllers.deleteCustomer)
export const customerRoutes = router