import express from 'express';
import { Book } from './models/models.js';
import {PORT ,MONGO_URL} from "./config.js";
import mongoose from "mongoose";
import router from './routes/Routes.js';
import cors from 'cors'



const app = express();
app.use(cors())
app.use(express.json());
app.use('/books',router)


app.get('/',(req,res)=>{
    res.send('Welcome to BooK store')

    
});


mongoose.connect(MONGO_URL).then(()=>{
    
    console.log("db success");
    app.listen(PORT,()=>{
        console.log("your server is live ")
    })
}
).catch((e)=>{
 console.log(e);
});
