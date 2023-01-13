'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Article }) {
      Users.hasMany(Article, { as: 'articles', foreignKey: 'article_id' })
    }

  };
  Users.init({
    user_id: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
    firstName: DataTypes.STRING, allowNull: false,
    lastName: DataTypes.STRING, allowNull: false,
    email: DataTypes.STRING, allowNull: false,
    passwordDigest: DataTypes.STRING, allowNull: false,
  }, {
    sequelize,
    tableName: 'users',
    modelName: 'Users',
  });
  return Users;
};