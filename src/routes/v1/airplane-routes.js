const exress=require('express');

const router=exress.Router()

const{ Airplanecontroller }=require("../../controllers");
const { AirplaneMiddlewares }=require("../../middlewares");

// /api/v1/airplanes.POST

router.post('/', 
    AirplaneMiddlewares.validateCreateRequest,
    Airplanecontroller.createAirplane
)


module.exports=router