'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('articles',[{
      article_id: '',
      title: '',
      author:'' ,
      description:'' ,
      date: '',
      content: '',
      image: '' ,
    }, {
      article_id: '' ,
      title: '',
      author: '' ,
      description: '',
      date: '',
      content: '',
      image: '',
    }, {
      article_id: '',
      title: '',
      author:'' ,
      description:'' ,
      date: '',
      content: '',
      image: '' ,
    }  
  ])
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('articles', null, {})
  }
};
