const mongoose = require('mongoose')
const { Schema } = mongoose


const userSchema = new Schema ({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String },
    password: { type: String }

})


const User = mongoose.model('User', userSchema)
module.exports = User










// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     static associate({ models }) {
//     //   Users.hasMany(Article, { as: 'articles', foreignKey: 'article_id' })
//     }

//   };
//   User.init({
//     user_id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false
//     }, 
//     lastName: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     email:{
//       type: DataTypes.STRING,
//       allowNull: false
//     }, 
//     passwordDigest:{
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     createdAt:{
//       type: DataTypes.DATE,
//       allowNull: false
//     },
//     updatedAt:{
//       type: DataTypes.DATE,
//       allowNull: false
//     },
//   }, {
//     sequelize,
//     // freezeTableName: true,
//     // tableName: 'users',
//     modelName: 'User',
//   });
//   return User;
// };