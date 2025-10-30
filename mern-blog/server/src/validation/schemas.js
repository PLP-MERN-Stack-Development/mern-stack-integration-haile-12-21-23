const Joi=require('joi');
const postSchema=Joi.object({
    title:Joi.string().min(3).max(200).required(),
    content:Joi.string().min(10).required(),
    excerpt:Joi.string().max(500).optional().allow(''),
    category:Joi.string().optional().allow(''),
    tags:Joi.array().items(Joi.string()).optional(),

});

const categorySchema=Joi.object({
    name:Joi.string().min(2).max(100).required()
});

const registerSchema=Joi.object({
    name:Joi.string().min(2).required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(6).required(),
});

const loginSchema=Joi.object({
email:Joi.string().email().required(),
password:Joi.string().required()
});

module.exports={postSchema,categorySchema,registerSchema,loginSchema};