import express from "express";
import { validateRequest } from "../../middlewares/validationRequest";
import { recordControllers } from "./serviceRecord.controller";
import { serviceRecordValidation } from "./serviceRecord.validation";

const router = express.Router()

router.post('/',validateRequest(serviceRecordValidation),recordControllers.createRecord)
router.get('/',recordControllers.getAllRecords)
router.get('/status',recordControllers.OverdueRecords)
router.get('/:serviceId',recordControllers.getSingleRecord)
router.put('/:serviceId/complete',recordControllers.updateSingleRecord)

export const serviceRecordRoutes = router