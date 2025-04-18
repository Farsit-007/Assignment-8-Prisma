import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { customerServices } from "./customer.service";
import  httpStatus  from "http-status";

const createCustomer = catchAsync(async(req,res)=>{
    const result = await customerServices.createCustomerIntoDB(req.body)
    sendResponse(res,{
        statusCode : httpStatus.CREATED,
        success : true,
        message : "Customer created successfully",
        data : result
    })
})

const getAllCustomer = catchAsync(async(req,res)=>{
    const result = await customerServices.getAllCustomerIntoDB()
    sendResponse(res,{
        statusCode : httpStatus.OK,
        success : true,
        message : "Customers fetched successfully",
        data : result
    })
})

const getSingleCustomer = catchAsync(async(req,res)=>{
    const result = await customerServices.getSingleCustomerIntoDB(req.params.customerId)
    sendResponse(res,{
        statusCode : httpStatus.OK,
        success : true,
        message : "Customers fetched successfully",
        data : result
    })
})

const updateSingleCustomer = catchAsync(async(req,res)=>{
    const result = await customerServices.updateSingleCustomerIntoDB(req.params.customerId,req.body)
    sendResponse(res,{
        statusCode : httpStatus.OK,
        success : true,
        message : "Customer updated successfully",
        data : result
    })
})

const deleteCustomer = catchAsync(async(req,res)=>{
    const result = await customerServices.deleteCustomerIntoDB(req.params.customerId)
    sendResponse(res,{
        statusCode : httpStatus.OK,
        success : true,
        message : "Customer deleted successfully"
    })
})


export const customerControllers = {
    createCustomer,
    getAllCustomer,
    getSingleCustomer,
    updateSingleCustomer,
    deleteCustomer
}