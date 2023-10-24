const { StatusCodes } = require('http-status-codes');
const {AirplaneRepository}=require('../repositiories');

const airplaneRepository = new AirplaneRepository();
const AppError=require('../utils/errors/app-error');



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
async function getAirplanes()
{

    try{
        const airplanes=await airplaneRepository.getAll();
        return airplanes;
    }
    catch(error)
    {
        throw new AppError("Cannot fetch data of all the airplanes" , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplane(id)
{
     try{
        const airplane=await airplaneRepository.get(id);
        console.log("From airplane services" ,  airplane);
        return airplane;
     }
     catch(error)
     {
        
        console.log("This is from the services" , error.statusCode);
        if(error.statusCode == StatusCodes.NOT_FOUND)
        {
            console.log("from airplane services" , StatusCodes.NOT_FOUND);
            throw new AppError('The airplane you requested is not present' , error.statusCode);
        }
        throw new AppError('Cannot fetch the data of airplanes ' , StatusCodes.INTERNAL_SERVER_ERROR)
     }
    
}

async function destoryAirplane(id)
{
    try{
        const airplanes=await airplaneRepository.destroy(id);
        return airplanes;
    }
    catch(error)
    {
        if(error.statusCode == StatusCodes.NOT_FOUND)
        {
            throw new AppError('The airplane you requested is not present to delete' , error.statusCode);
        }
        throw new AppError("Cannot fetch data of all the airplanes" , StatusCodes.INTERNAL_SERVER_ERROR);
    }   
}
async function updateAirplane(id)
{
    try {
        const airplane=await airplaneRepository.update(id);
        return airplane
    }
    catch(error)
    {
        if(error.statusCode==StatusCodes.NOT_FOUND)
        {
            throw new AppError("cannot update the required id" , error.statusCode);
        }
    }
    throw new AppError("Cannot fetch data of all the airplanes" , StatusCodes.INTERNAL_SERVER_ERROR);
}
module.exports={
    createAirplane,
    getAirplanes,
    getAirplane,
    destoryAirplane,
    updateAirplane
}
 

