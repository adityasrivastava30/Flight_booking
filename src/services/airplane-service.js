const { StatusCodes } = require('http-status-codes');
const {AirplaneRepository}=require('../repositiories');

const airplaneRepository = new AirplaneRepository();
const AppError=require('../utils/errors/app-error')


async function createAirplane (data){
    try{
        const airplane = await airplaneRepository.create(data);
        return airplane;
    }
    catch(error){
        console.log(error);
        if(error.name=='SequelizeValidationError')
        {
            let explaination=[]; // For every Failed Entry you get the array like this with reason
            Object.keys(error.errors.array.forEach((element) => {
                explaination.push(err.message)
            }));
            console.log(explaination);
            throw new AppError("Cannot  create a new Airplane Object" , StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw error;
    }
}
module.exports={
    createAirplane
}
