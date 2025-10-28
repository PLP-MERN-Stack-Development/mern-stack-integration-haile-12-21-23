const dotenv=require('dotenv');
const express=require('express');
const cors=require('cors');
require('express-async-errors');
const connectDB=require('./config/mongoose');
// const mongoose=require('mongoose');
// const postsRouter = require('./routes/posts');
// const categoriesRouter = require('./routes/categories');
// const authRouter = require('./routes/auth');
// const errorHandler = require('./middleware/errorHandler');

const PORT=process.env.PORT||3000
dotenv.config({ override: true });
console.log('PORT',PORT);


    const app=express();

    app.use(cors());
    app.use(express.json());
    app.use('../uploads',express.static(process.env.UPLOAD_DIR ||'uploads'));

// app.use('/api/posts', postsRouter);
// app.use('/api/categories', categoriesRouter);
// app.use('/api/auth', authRouter);

// app.use(errorHandler);

connectDB()
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));

