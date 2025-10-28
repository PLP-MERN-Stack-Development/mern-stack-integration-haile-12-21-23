const jwt=require('jsonwebtoken');

module.exports=function (req,res,next){
    const auth=req.header('Authorization');

    if (!auth) {
        return res.status(401).json({error:'Access denied.'});
    }
    const token=auth.split('')[1];
    if (!token) {
        return res.status(401).json({
            error:'Invalid token'
        });
    }
    try {
        const payload=jwt.verify(token,process.env.JWT_SECRET);

        req.user=payload;
        next();

    } catch (error) {
res.status(401).json({
    error:'Invalid token'
});
    }
};