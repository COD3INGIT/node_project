const {sequelize} = require('../db')
const {DataTypes,Model} = require('sequelize');

class Sales extends Model {}

Sales.init({
    id:{primaryKey:true,autoIncrement:true,type:DataTypes.INTEGER},
    billId:{type:DataTypes.INTEGER,field:'bill_id'},
    billNo : {type:DataTypes.STRING,field:'bill_no'},
    itemId:{type:DataTypes.INTEGER,field:'item_id'},
    quantity:{type:DataTypes.INTEGER,field:'quantity'},
    gst: {type:DataTypes.FLOAT,field:'gst'},
    gstValue : {type:DataTypes.FLOAT,field:'gst_value'},
    totalAmount : {type:DataTypes.FLOAT,field:'total_amount'},
    staff : {type:DataTypes.STRING,field:'staff'},
  

},{
sequelize,
modelName: 'Sales' // We need to choose the model name)
})
