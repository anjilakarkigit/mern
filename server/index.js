import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import studentRoutes from'./routes/student.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(cors());

app.use(bodyParser.json({limit: "20mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended: true}));

app.use('/students', studentRoutes )

const CONNECTION_URL = process.env.CONNECTION_URL

const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>app.listen(PORT, ()=>
    console.log(`connection is established and is running on port: ${PORT}`)
    )).catch((err)=>console.log(err.message))

mongoose.set('useFindAndModify', false)


