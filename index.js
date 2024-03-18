const express = require('express');
const billingRoutes = require('./billing/routes');
const {sequelize,connection} = require('./db')
const User = require('./models/users')
const Product = require('./models/products')
const Billing = require('./models/billing')
const Sales = require('./models/sales')
const userController = require('./users/user-controller')
const bodyParser = require('body-parser');
const productController = require('./inventory/items.controller')

const app = express();

app.use(bodyParser.json());
app.use('/api',billingRoutes)
app.use('/api',userController)
app.use('/api',productController)

app.use


const PORT = process.env.PORT || 3000

app.listen(PORT,async ()=>{
    console.log(`Server is running dd in port ${PORT}`)
    await connection();
})

app.get('/',(req,res)=>{
    res.status(200).json({message:'helooo'})
});

async function synchronizeDatabase(){
    try {
        await sequelize.sync();
        console.log('Database synchronized');
      } catch (error) {
        console.error('Error synchronizing database:', error);
      }


}
synchronizeDatabase();
