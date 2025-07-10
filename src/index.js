import dotenv from 'dotenv'

import { connectDB } from "./db/index.js"

import { app } from './app.js'
import path from 'path'

dotenv.config({
    path:'./.env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 4000,()=>{
        console.log(`app running at port ${process.env.PORT }`);
    })  
}).catch((err) => {
    console.log("MONGO DB Conenction Failed!!!", err);
});