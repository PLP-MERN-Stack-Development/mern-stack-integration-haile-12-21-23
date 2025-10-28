const mongoose=require('mongoose');

const postSchema=new mongoose.Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    excerpt:{type:String},
    featuredImage:{type:String},
    category:{type:mongoose.Schema.Types.ObjectId, ref:'Category'},
author:{type:mongoose.Schema.Types.ObjectId, ref:'User'},
tags:[Strings],
createdAt:{type:Date,default: Date.now()}
});
module.exports=mongoose.model('Post',postSchema);