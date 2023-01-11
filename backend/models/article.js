'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Article extends Model {


    static associate({ User }) {
      Article.belongsTo(User, { foreignKey: 'user_id', as: 'user' })
    }

  };

  Article.init({
    articleId: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true

    },
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    description: DataTypes.STRING,
    date: DataTypes.NUMBER,
    content: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
    modelName: 'Article',
  });
  return Article;
};
