const { StatusCodes } = require('http-status-codes');
const { CityService }=require('../services');
const { successResponse , ErrorResponse } = require('../utils/common');

/*post /airplanes*/
// create the city;
async function createCity(req ,res )
{
    try{
        const city=await CityService.createCity({
            name : req.body.name
           
    });
    successResponse.data=city
    return res.status(StatusCodes.CREATED).json(successResponse);

    }catch(error){
        ErrorResponse.error=error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports ={createCity}