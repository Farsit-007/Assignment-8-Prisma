import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import  httpStatus  from "http-status";
import { bikeServices } from "./bike.service";

const createBike = catchAsync(async(req,res)=>{
    const result = await bikeServices.createBikeIntoDB(req.body)
    sendResponse(res,{
        statusCode : httpStatus.CREATED,
        success : true,
        message : "Bike added successfully",
        data : result
    })
})

const getAllBikes = catchAsync(async(req,res)=>{
    const result = await bikeServices.getAllBikedIntoDB()
    sendResponse(res,{
        statusCode : httpStatus.OK,
        success : true,
        message : "Bikes fetched successfully",
        data : result
    })
})

const getSingleBike = catchAsync(async(req,res)=>{
    const result = await bikeServices.getSingleBikeIntoDB(req.params.bikeId)
    sendResponse(res,{
        statusCode : httpStatus.OK,
        success : true,
        message : "Bike fetched successfully",
        data : result
    })
})




export const bikeControllers = {
    createBike,
    getAllBikes,
    getSingleBike
}