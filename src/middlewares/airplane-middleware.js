const { StatusCodes } = require("http-status-codes");
const { error } = require("winston");
const { ErrorResponse }=require('../utils/common')

function validateCreateRequest(req , res , next)
{
    if(!req.body.modelNumber)
    {
        ErrorResponse.message="something went wrong while creating airplane";
        ErrorResponse.error=new AppError(['Model Number Not found '], StatusCodes.BAD_REQUEST ); 
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

module.exports={
    validateCreateRequest
}
