const express = require('express')
const authorizaition= require('../middleware')
const { addItem } = require('./items.service')

const router = express.Router()

router.post('/product/add',authorizaition,addItem)


router.get('/add',(req,res)=>{
    
})


router.get('/add',(req,res)=>{
    
})

module.exports = router ;