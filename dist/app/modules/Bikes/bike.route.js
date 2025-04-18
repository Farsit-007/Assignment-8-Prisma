"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validationRequest_1 = require("../../middlewares/validationRequest");
const bike_validation_1 = require("./bike.validation");
const bike_controller_1 = require("./bike.controller");
const router = express_1.default.Router();
router.post('/', (0, validationRequest_1.validateRequest)(bike_validation_1.bikeValidation), bike_controller_1.bikeControllers.createBike);
router.get('/', bike_controller_1.bikeControllers.getAllBikes);
router.get('/:bikeId', bike_controller_1.bikeControllers.getSingleBike);
exports.bikeRoutes = router;
