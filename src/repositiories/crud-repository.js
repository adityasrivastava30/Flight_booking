const { Logger } = require("../config");
const {Statuscode} = require('http-status-codes');

class CrudRepository{

    constructor(model)
    {
        this.model=model;
    }

    async create(data)
    {
            const response=await this.model.create(data);
            return response;
       
    }
    async destory(data)
    {
        try{
            const response=await this.model.destory({
                where:{
                    id:data
                }
            })
            return response;
        }
        catch(error)
        {
            Logger.error("something went wrong in the Crud Repo : create");
            throw error;
        }
    }
    async getAll()
    {
        try{
            const response=await this.model.findAll()
            return response;
        }
        catch(error)
        {
            Logger.error("something went wrong in the Crud Repo : create");
            throw error;
        }
    }
    async update(id,data)
    {
        try{
            const response=await this.model.update(data, {
                where :{
                    id: id
                }
            })
            return response;
        }
        catch(error)
        {
            Logger.error("something went wrong in the Crud Repo : create");
            throw error;
        }
    }
}
module.exports = CrudRepository;