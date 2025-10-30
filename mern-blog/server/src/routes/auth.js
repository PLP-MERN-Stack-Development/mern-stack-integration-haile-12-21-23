const express=require('express');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const asyncHandler =require ("express-async-handler");

const User=require('../models/User');
const auth =require('../middleware/auth')

const {registerSchema,loginSchema}=require('../validation/schemas');

const router=express.Router();
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

router.post('/register',asyncHandler(async(req,res)=>{
    const body={...req.body};
        console.log('Body:',body);
    const {error, value}=registerSchema.validate(body);
        console.log('Value:',value);



    if(error){
        return res.status(400).json({
            error:error.details[0].message
        });
    }
    const existingUser=await User.findOne({email:value.email});

    if(existingUser){
        return res.status(400).json({
            error:'User exists.'
        });
    }
    const hash= await bcrypt.hash(value.password,10);
    const user=User.create(value
    );
    if(user){
       return res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id),
        });
    }else{
        return res.status(400).json({
            error:error.details[0].message
        });
    }
}));

router.post('/login', asyncHandler(async(req,res)=>{
    const {error,value}=loginSchema.validate(req.body);
    if(error){
        return res.status(400).json({
            error:error.details[0].message
        });
    }
      const user = await User.findOne({email:value.email});
    console.log('user:',user);


    if(user &&(await user.matchPassword(value.password) )){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id),
        });
    }
    else{
        return res.status(401).json({
            error:'Invalid email or password'
        });
    }
}));

router.get('/profile', auth, asyncHandler(async (req, res) => {
    console.log('Authorization header:', req.header('Authorization'));

  console.log('req.user:', req.user); // should contain the decoded JWT payload

  const user = await User.findById(req.user.id).select('-password');
  if (!user) return res.status(404).json({ error: 'User not found' });

  res.json(user);
}));

module.exports=router