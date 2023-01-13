'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('articles',[{   
      title: 'African Safari',
      author:'jackson Green' ,
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.' ,
      date: '06-11-2022',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, cupiditate quis tempora nulla nihil libero. Suscipit sequi rem ea? Aut quisquam consequuntur atque. Id, dolor perspiciatis expedita sunt quas voluptate!orem ipsum dolor sit amet consectetur adipisicing elit. Fugit, cupiditate quis tempora nulla nihil libero.',
      image: '../assets/images.jfif',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Fall in Love with Greece',
      author: 'Tito' ,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      date: '02-11-2022',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, cupiditate quis tempora nulla nihil libero. Suscipit sequi rem ea? Aut quisquam consequuntur atque. Id, dolor perspiciatis expedita sunt quas voluptate!orem ipsum dolor sit amet consectetur adipisicing elit. Fugit, cupiditate quis tempora nulla nihil libero.',
      image: '../assets/santorini.jpg',
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      title: 'Honeymoon in Italy',
      author:'Tara' ,
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.' ,
      date: '05-11-2021',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, cupiditate quis tempora nulla nihil libero. Suscipit sequi rem ea? Aut quisquam consequuntur atque. Id, dolor perspiciatis expedita sunt quas voluptate!orem ipsum dolor sit amet consectetur adipisicing elit. Fugit, cupiditate quis tempora nulla nihil libero.',
      image: './assets/italy.jpg' ,
      createdAt: new Date(),
      updatedAt: new Date()
    }  
  ])
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('articles', null, {})
  }
};
