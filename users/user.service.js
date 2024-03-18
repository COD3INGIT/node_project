const { error } = require('console')
const jwt = require('jsonwebtoken');
const User = require('../models/users')
require('dotenv').config();
const bcrypt = require('bcryptjs');

module.exports = {
    signup: async(req,res)=>{
    
        const userFound= await User.findOne({
            where:{
                email: req.body.email
            }
        })
        if(userFound){
            throw  error("email already registred")
        }
        const password = await bcrypt.hash(req.body.password,10)

        const userCreate = await User.create({email:req.body.email,
            password:password})
        console.log(userCreate)
        const token = jwt.sign({ userId: userCreate.id}, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
        res.json({message:"User signed up successfully", token: token });

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