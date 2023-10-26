const express=require('express');

const {cityController}=require('../../controllers');
const {CityMiddlewares}=require('../../middlewares');
const { route } = require('./airplane-routes');

const router =express.Router();

router.post('/' , cityController.createCity)

router.post('/' , CityMiddlewares.validateCreateRequest,cityController.createCity);

router.get('/' , cityController.getCity)

router.delete('/:id',cityController.destroyCity );

router.get('/:id' , cityController.getCityById);

module.exports=router;
