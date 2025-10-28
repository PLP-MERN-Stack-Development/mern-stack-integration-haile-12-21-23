module.exports=function errorHandler(error,req,res,next){
    console.error(error.stack);

    const status=error.status ||500;
    res.status(status).json({
        error:error.message||'Internal server Error'
    });
}