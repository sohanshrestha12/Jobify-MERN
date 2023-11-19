import * as dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 5100;
import express from "express";
const app = express();
import morgan from "morgan";

//routers
import jobRouter from './routes/jobRouter.js';



if(process.env.NODE_ENV === 'development'){ 
    app.use(morgan('dev'));
}
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('This is a home page');
});

app.post('/',(req,res)=>{
    res.json({message:'data received',data:req.body});
});

app.use('/api/v1/jobs',jobRouter);   
// //GET all jobs
// app.get('/api/v1/jobs',)

// //CREATE jobs
// app.post('/api/v1/jobs',)

// //GET single job
// app.get('/api/v1/jobs/:id',)

// //EDIT Job
// app.patch("/api/v1/jobs/:id",)

// //DELETE Job
// app.delete("/api/v1/jobs/:id",)
app.use('*',(req,res)=>{
    res.status(404).json({msg:'not found'});
})
app.use((err,req,res,next)=>{
    console.log(err); 
    res.status(500).json({msg:'something went wromg'});
})


app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})
