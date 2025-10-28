const mongoose=require('mongoose');
module.exports=async function connectDB(){
   mongoose.connect(process.env.MONGODB_URI
).then(()=>console.log(`MongoDB connected successfully.`))
.catch(error=>console.log(`Error occurred:${error}`));


};