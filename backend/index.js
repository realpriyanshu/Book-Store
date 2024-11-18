import express from 'express';
import {PORT ,MONGO_URL} from "./config.js";
import mongoose from "mongoose";



const app = express();

app.post('/createbook' ,(req,res)=>{
    
} )

app.get('/',(req,res)=>{

    
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
