const exress=require('express');

const router=exress.Router()

const{ Airplanecontroller }=require("../../controllers");
const { AirplaneMiddlewares }=require("../../middlewares");

// /api/v1/airplanes.POST

router.post('/', 
    AirplaneMiddlewares.validateCreateRequest,
    Airplanecontroller.createAirplane
)

// api/v1/airplanes GET
router.get('/' , Airplanecontroller.getAirplanes)


// api/v1/airplanes/:id GET
router.get('/:id', Airplanecontroller.getAirplane)

module.exports=router