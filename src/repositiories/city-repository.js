const CrudRepository= require('./crud-repository')
const {City} =require('../models/index');

class CityRepository extends CrudRepository {
    
    constructor()
    {
            super(City)
    }

    /* you can here write all the raw queries*/
    
}

module.exports=CityRepository ;