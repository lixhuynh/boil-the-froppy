const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({"message": "hello"})
})

app.listen(5000, () => {console.log("Server started")})