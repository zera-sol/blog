const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const User = require("./models/User")

const app = express();
      app.use(cors())
      app.use(express.json())

mongoose.connect("mongodb+srv://zedomanwithjesu1994:OOQP8wVkvxF2jjys@cluster-zera.llodpai.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-zera")

app.post("/register", async (req, res) => {
    const {username, password} = req.body;
    const UserDoc = await User.create({username, password})
    res.json({UserDoc})
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