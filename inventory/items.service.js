const { error } = require('console')
const jwt = require('jsonwebtoken');
const Product = require('../models/products')
require('dotenv').config();
const bcrypt = require('bcryptjs');
const { Op } = require('sequelize');

module.exports = {
    addItem: async(req,res)=>{
        console.log("req=======",req.body)
    
        const prodFound= await Product.findOne({
            where:{
                itemName: req.body.itemName
                }
            
        })
        if(prodFound){
            throw  error("item exist")
        }
        let product = new Product
        product = req.body
        await Product.create(product)
       
       
    },
    login: async(req,res)=>{
        const userFound= await User.findOne({
            where:{
                email: req.body.email,
            }
        })
        const token = jwt.sign({ userId: userFound.id}, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
        const validPassword = await bcrypt.compare(req.body.password, userFound.password);
        if (!validPassword) {
            return res.status(401).json({ message: 'Invalid credentials' });
          }
      
        console.log(userFound)
        res.json({message:"User logged in successfully", token: token });

    }

}