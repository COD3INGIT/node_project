const {sequelize} = require('../db')
const {DataTypes} = require('sequelize');

const User = sequelize.define('users',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
        
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    address:{
        type: DataTypes.TEXT,
        allowNull: true
    },

},
{
    updatedAt: false
})
module.exports =User
