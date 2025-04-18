"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRecordRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validationRequest_1 = require("../../middlewares/validationRequest");
const serviceRecord_controller_1 = require("./serviceRecord.controller");
const serviceRecord_validation_1 = require("./serviceRecord.validation");
const router = express_1.default.Router();
router.post('/', (0, validationRequest_1.validateRequest)(serviceRecord_validation_1.serviceRecordValidation), serviceRecord_controller_1.recordControllers.createRecord);
router.get('/', serviceRecord_controller_1.recordControllers.getAllRecords);
router.get('/status', serviceRecord_controller_1.recordControllers.OverdueRecords);
router.get('/:serviceId', serviceRecord_controller_1.recordControllers.getSingleRecord);
router.put('/:serviceId/complete', serviceRecord_controller_1.recordControllers.updateSingleRecord);
exports.serviceRecordRoutes = router;
