const multer=require('multer');
const path=require('path');
const fs=require('fs');


const UPLOAD_DIR=process.env.UPLOAD_DIR||'uploads';
if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR, {recursive:true});
}

const storage=multer.diskStorage({
    destination:(req,file,cb)=>(null,UPLOAD_DIR),
    filename:(req,file,cb)=>{
        const ext=path.extname(file.originalname);
        cb(null,`${Date.now()}-${Math.round(Math.random()*1e9)}${ext}`);
    }
});
const upload=multer({
    storage,limits:{
        fileSize:5*1024*1024
    }
});
module.exports=upload;