const express=require('express');
const Category=require('../models/Category');
const {categorySchema}=require('../validation/schemas');

const router=express.Router();

router.get('/',async (req,res)=> {
const list=await Category.find().sort('name');
res.json(list);
});

router.post('/', async(req,res)=>{
    const {error,value}=categorySchema.validate(req.body);
    if (error) {
        return res.status(400).json({
            error:error.details[0].message
        });
    }
    const existingPost=await Category.findOne({name:value.name});
    if (existingPost) {
        return res.status(400).json({
            error:"Category already exist."
        });
    }
    const category=await Category.create(value);
    res.status(201).json(category);
})

module.exports=router;