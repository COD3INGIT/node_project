const {sequelize} = require('../db')
const {DataTypes,Model} = require('sequelize');

class Product extends Model {}

Product.init({
    id:{primaryKey:true,autoIncrement:true,type:DataTypes.INTEGER},
    itemCode : {type:DataTypes.STRING,field:'item_code'},
    itemName : {type:DataTypes.STRING,field:'item_name'},
    batchCode : {type:DataTypes.STRING,field:'batch_code'},
    quantity : {type:DataTypes.INTEGER,field:'quantity'},
    unitPrice : {type:DataTypes.FLOAT,field:'unit_price'},
    mrp : {type:DataTypes.FLOAT,field:'mrp'},
    gstPercentage : {type:DataTypes.FLOAT,field:'gst_percentage'},
    gstValue : {type:DataTypes.FLOAT,field:'gst_value'},
    taxValue : {type:DataTypes.FLOAT,field:'tax_value'},

},{
sequelize,
modelName: 'Product' // We need to choose the model name)
})
module.exports = Product
