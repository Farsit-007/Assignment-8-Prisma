import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import  httpStatus  from "http-status";
import { recordServices } from "./serviceRecord.service";

const createRecord = catchAsync(async(req,res)=>{
    const result = await recordServices.createRecrdIntoDB(req.body)
    sendResponse(res,{
        statusCode : httpStatus.CREATED,
        success : true,
        message : "Service record created successfully",
        data : result
    })
})

const getAllRecords = catchAsync(async(req,res)=>{
    const result = await recordServices.getAllRecordIntoDB()
    sendResponse(res,{
        statusCode : httpStatus.OK,
        success : true,
        message : "Service records fetched successfully",
        data : result
    })
})

const getSingleRecord = catchAsync(async(req,res)=>{
    const result = await recordServices.getSingleRecordIntoDB(req.params.serviceId)
    sendResponse(res,{
        statusCode : httpStatus.OK,
        success : true,
        message : "Service records fetched successfully",
        data : result
    })
})

const updateSingleRecord = catchAsync(async(req,res)=>{
    const result = await recordServices.updateSingleRecordIntoDB(req.params.serviceId,req.body)
    sendResponse(res,{
        statusCode : httpStatus.OK,
        success : true,
        message :"Service marked as completed",
        data : result
    })
})


const OverdueRecords = catchAsync(async(req,res)=>{
    const result = await recordServices.overdueRecordIntoDB()
    sendResponse(res,{
        statusCode : httpStatus.OK,
        success : true,
        message : "Overdue or pending services fetched successfully",
        data : result
    })
})


export const recordControllers = {
    createRecord,
    getAllRecords,
    getSingleRecord,
    updateSingleRecord,
    OverdueRecords
}