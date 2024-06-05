import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js'

const app = express();
app.use(cors())
app.use(express.json())

dotenv.config();
const port = process.env.PORT || 4000;
const mongoURI = process.env.MongoDBURI

//connect to mongoDB
try {
    mongoose.connect(mongoURI,{
        useNewUrlParser : true,
        useUnifiedTopology:true
    })
    console.log('connected to mongoDb')
} catch (error) {
    console.log("Error",error)
}

//defining routes

app.use('/book',bookRoute)
app.use('/user',userRoute)
app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})