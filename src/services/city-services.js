const { StatusCodes }=require('http-status-codes');
const { CityRepository }=require('../repositiories');
const AppError = require('../utils/errors/app-error')

const cityRepository = new CityRepository();


async function createCity(data)
{
    try{
        const city=await cityRepository.create(data);
        return city;
    }
    catch(error)
    {
        console.log( error);
        if(error.name =='SequelizeValidationError' || error.name =='SequelizeUniqueConstraintError')
        {
            let explaination=[];
            error.errors.forEach((err)=> {
                explaination.push(err.message);
            });
            throw new AppError(explaination , StatusCodes.BAD_REQUEST);

        }
        throw new AppError('Cannot create a new City' , StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function destroyCity(id)
{
    try{
        const city=await cityRepository.destroy(id);
        return city;
    }
    catch(error)
    {
        if(error.statusCode == StatusCodes.NOT_FOUND)
        {
            throw new AppError('The city you requested is not present to delete' , error.statusCode);
        }
        throw new AppError("Cannot fetch data of the city" , StatusCodes.INTERNAL_SERVER_ERROR);
    }
   
}

async function getCity()
{

    try{
        const city=await cityRepository.getAll();
        return city;
    }
    catch(error)
    {
        throw new AppError("Cannot fetch data of all the city" , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getCityId(id)
{
    try{
        const city=await cityRepository.get(id);
        return city;
    }
    catch(error)
    {
        throw new AppError("Cannot fetch the city of the desired Id" , StatusCodes.NOT_FOUND);
    }
}

module.exports={
    createCity,
    destroyCity,
    getCity,
    getCityId
}
