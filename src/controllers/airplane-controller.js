const { StatusCodes } = require('http-status-codes');
const { AirplaneService }=require('../services');
const { successResponse , ErrorResponse } = require('../utils/common');;

async function createAirplane(req ,res)
{
    try{
        const airplane=await AirplaneService.createAirplane({
            modelNumber : req.body.modelNumber,
            capacity : req.body.capacity
           
    });
    successResponse.data=airplane
    return res.status(StatusCodes.CREATED).json(successResponse);

    }catch(error){
        ErrorResponse.error=error;
        return res.status(error.StatusCodes).json(ErrorResponse);
    }
}
module.exports={
    createAirplane
}