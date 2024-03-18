const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(
    'node_project',
    'root',
    'password',{
        dialect: 'mysql',
        host:'localhost'

    }
);

const connection = async ()=>{
    try{
        await sequelize.authenticate();
        console.log("successfully connected to db")

    }
    catch{
        console.log("errr")

    }
}

module.exports = {sequelize,connection}
