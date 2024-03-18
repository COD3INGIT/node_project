const {sequelize} = require('../db')
const {DataTypes,Model} = require('sequelize');

class Billing extends Model {}

Billing.init({
    id:{primaryKey:true,autoIncrement:true,type:DataTypes.INTEGER},
    billNo : {type:DataTypes.STRING,field:'bill_no'},
    grandTotal : {type:DataTypes.FLOAT,field:'grand_total'},
    billDate : {type:DataTypes.DATE,field:'bill_date'},
    deliveryDate : {type:DataTypes.DATE,field:'delivery_date'},
    ewayNumber : {type:DataTypes.STRING,field:'eway_no'},
    deliveryAddress : {type:DataTypes.TEXT,field:'delivey_address'},
    deliveryCharge : {type:DataTypes.TEXT,field:'delivey_charge'},
    discount : {type:DataTypes.TEXT,field:'discount'},
    paymentMode  : {type:DataTypes.ENUM('BANK','CHEQUE','CASH'),field:'payment_mode'},
    gstValue : {type:DataTypes.FLOAT,field:'gst_value'},
    note : {type:DataTypes.TEXT,field:'unit_price'},
    vehicleNumber : {type:DataTypes.STRING,field:'vehicle_no'},
  

},{
sequelize,
modelName: 'Billing' // We need to choose the model name)
})
