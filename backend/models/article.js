'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Users }) {
      Article.belongsTo(Users, { foreignKey: 'user_id', as: 'users' })
    }

  };

  Article.init({
    article_id: DataTypes.INTEGER,primaryKey: true, autoIncrement: true,
    title: DataTypes.STRING, allowNull: false,
    author: DataTypes.STRING, allowNull: false,
    description: DataTypes.STRING, allowNull: false,
    date: DataTypes.DATE, allowNull: false,
    content: DataTypes.STRING, allowNull: false,
    image: DataTypes.STRING, allowNull: false
  }, {
    sequelize,
    tablename: 'articles',
    modelName: 'Article',
  });
  return Article;
};