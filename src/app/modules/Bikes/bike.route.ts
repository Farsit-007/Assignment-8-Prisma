import express from "express";
import { validateRequest } from "../../middlewares/validationRequest";
import { bikeValidation } from "./bike.validation";
import { bikeControllers } from "./bike.controller";


const router = express.Router()

router.post('/',validateRequest(bikeValidation),bikeControllers.createBike)
router.get('/',bikeControllers.getAllBikes)
router.get('/:bikeId',bikeControllers.getSingleBike)
export const bikeRoutes = router