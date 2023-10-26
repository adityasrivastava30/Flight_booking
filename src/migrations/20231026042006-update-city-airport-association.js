'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Airports' ,{ 
      type: 'FOREIGN KEY',
      name:'city_fkey_constraint',
      fields:['City_id'],
      references:{
        table:'Cities',
        field:'id'
      },
      onUpdate:'CASCADE',
      onDELETE:'CASCADE',
    } );
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeConstraint('Airports' , 'city_fkey_constraints')
  }
};


// This migration is file is generated for only adding the key in the airports table that will act as the foreign key with the city table;

// command Used : npx sequelize migration:generate --name update-city-airport-association