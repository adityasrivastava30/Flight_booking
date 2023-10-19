const express=require('express');

const router=express.Router();


const airplaneRoutes =require('./airplane-routes')

const  { Infocontroller } =require('../../controllers');



router.use('/airplanes' , airplaneRoutes);
router.get('/info' , Infocontroller.info)

module.exports=router;