"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordServices = void 0;
const prisma_1 = __importDefault(require("../../utils/prisma"));
const createRecrdIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.bike.findUniqueOrThrow({
        where: {
            bikeId: payload.bikeId,
        },
    });
    const result = yield prisma_1.default.serviceRecord.create({
        data: payload,
    });
    return result;
});
const getAllRecordIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.serviceRecord.findMany();
    return result;
});
const getSingleRecordIntoDB = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId,
        },
    });
    return result;
});
const updateSingleRecordIntoDB = (serviceId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.serviceRecord.findUniqueOrThrow({
        where: { serviceId },
    });
    if (payload.status === undefined) {
        payload.status = "done";
    }
    if (payload.completionDate === undefined) {
        payload.completionDate = new Date();
    }
    const result = yield prisma_1.default.serviceRecord.update({
        where: { serviceId },
        data: payload,
    });
    return result;
});
const overdueRecordIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const result = yield prisma_1.default.serviceRecord.findMany({
        where: {
            AND: [
                {
                    status: {
                        in: ["pending", "in_progress"],
                    },
                },
                {
                    serviceDate: {
                        lt: sevenDaysAgo,
                    },
                },
            ],
        },
    });
    return result;
});
exports.recordServices = {
    createRecrdIntoDB,
    getAllRecordIntoDB,
    getSingleRecordIntoDB,
    updateSingleRecordIntoDB,
    overdueRecordIntoDB,
};
