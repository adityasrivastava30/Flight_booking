const { StatusCodes } = require('http-status-codes');
const { AirplaneService }=require('../services');
const { successResponse , ErrorResponse } = require('../utils/common');;

/*post /airplanes*/
// create the airplanes;
async function createAirplane(req ,res )
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
async function getAirplanes(req , res)
{
    try{
        const airplanes=await AirplaneService.getAirplanes();
        successResponse.data=airplanes;
        return res.status(StatusCodes.OK).json(successResponse);
    }
    catch(error){
        return res.status(error.StatusCodes).json(ErrorResponse);
    }
}
// post : airplanes/:id
async function getAirplane(req ,res)
{
    try{
        const airplane=await AirplaneService.getAirplane(req.params.id);
        successResponse.data=airplane;
        return res.status(StatusCodes.OK).json(successResponse);
    }
    catch(error)
    {
        ErrorResponse.error=error;
        return res.status(error.StatusCodes).json(ErrorResponse);
    }
}
module.exports={
    createAirplane,
    getAirplanes,
    getAirplane
}

