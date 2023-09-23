require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRouter = require('./routes/user')
const todosRouter = require('./routes/todos')
const bodyParser = require('body-parser');

const server = express()

//useful middlewares
server.use(cors())
server.use(express.json())
server.use(bodyParser.json());

//routes
server.use("/api/user", userRouter.router)
server.use("/api/todos", todosRouter.router)


//  MONGO-DB CONNECTOR CODE 
main().catch((err => console.log(err)))
async function main(){
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database Connected")
    }catch(err){
        console.log("error in connecting with database")
    }
}

server.listen(process.env.PORT, ()=>{
    console.log("Server Started")
})