'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.City,{
        foreignKey:'city_id',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      });
      this.hasMany(models.flight , {
        foreignKey:'departureAirportId',
      });
      this.hasMany(models.flight , {
        foreignKey:'arrivalAirportId'
      })
    }
  }
  Airport.init({
    name: 
    {
      type: DataTypes.STRING,
      unique:true,
      allowNull: false,
    },
    code: {
      type:DataTypes.STRING,
      unique:true,
      allowNull:false
    },
    address:{ 
      type:DataTypes.STRING,
      unique:true,
    },
    city_id: {
      type:DataTypes.INTEGER,
      unique:true,
    }
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};