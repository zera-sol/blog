const express = require("express");
const cors = require("cors")

const app = express();
app.use(cors())
app.use(express.json())

app.post("/register", (req, res) => {
    const {username, password} = req.body;
    res.json({RequestData:{password, username}})
})

app.listen(4000);