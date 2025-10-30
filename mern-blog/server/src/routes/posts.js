const express=require('express');
const Post=require('../models/Post');
const {postSchema}=require('../validation/schemas');
const auth=require('../middleware/auth');
const upload=require('../middleware/upload');


const router=express.Router();

// GET /api/posts?page=1&limit=10&search=foo&category=id
router.get('/',async(req,res)=>{
    const page=Math.max(1,parseInt(req.query.page)||1);
    const limit=Math.min(50,parseInt(req.query.limit)||10);
    const skip=(page-1)*limit;

    const filter={};

    if (req.query.search) {filter.$or=[
{title:{$regex:req.query.search,$options:'i'}},
{content:{$regex:req.query.search,$options:'i'}}
    ] ;
    }
    if (req.query.category) {
        filter.category=req.query.category;
    }

   const [items, total] = await Promise.all([
  Post.find(filter)
    .populate('category')
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit),
  Post.countDocuments(filter)
]);
    res.json({items,total,page:Math.ceil(total/limit)})
});

router.get('/:id',async(req,res)=>{
const post=await Post.findById(req.params.id).populate('category').populate('author');
if(!post){
    return res.status(404).json({
        error:'Post not found'
    });

}
 res.json(post);
});

router.post('/',auth, async(req,res)=>{
    const body={...req.body};
    const {error,value}=postSchema.validate(body);

    if (error) {
        res.status(400).json({
            error:error.details[0].message
        });
    }

       value.author=req.user.id;
       const post=await Post.create(value);
       res.status(201).json(post);
});

router.put('/:id',auth,async(req,res)=>{
    const {error,value}=postSchema.validate(req.body);

    if(error){
        return res.status(400).json({
            error:error.details[0].message
        });
    }
    if(req.file){
        value.featureImage=`/${req.file.path.replace(/\\/g,'/')}`}
        const updated=await Post.findById(req.params.id,value, {new:true});
        if (!updated) {
            return res.status(404).json({
                error: 'Not found'
            });
        }
        res.json(updated);

});
router.delete('/:id',auth, async(req,res)=>{
    const deleted= await Post.findById(req.params.id);
    if(!deleted){
        return res.status(404).json({
            error:'Not found'
        });

    }
    res.json({
        success:true
    });
})

module.exports=router;