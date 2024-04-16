const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const User = require("./models/User")
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

mongoose.connect("mongodb+srv://zedomanwithjesu1994:OOQP8wVkvxF2jjys@cluster-zera.llodpai.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-zera")

const app = express();
      app.use(cors())
      app.use(express.json())

app.post("/register", async (req, res) => {
    const {username, password} = req.body;
    try{
        const document = await User.create({username, password:bcrypt.hashSync(password, salt)})
        res.json({document})
    }catch(e){
        res.status(400).json(e);
    }
})
app.listen(4000)



// OOQP8wVkvxF2jjys
// mongodb+srv://zedomanwithjesu1994:OOQP8wVkvxF2jjys@cluster-zera.llodpai.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-zera
// mongodb+srv://zedomanwithjesu1994:OOQP8wVkvxF2jjys@cluster-zera.llodpai.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-zera



















// const express = require("express");
// const cors = require("cors")

// const app = express();
// app.use(cors())
// app.use(express.json())

// app.post("/register", (req, res) => {
//     const {username, password} = req.body;
//     res.json({RequestData:{password, user}})
// })

// app.listen(4000);