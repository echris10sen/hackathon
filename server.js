// API
const express = require("express")
const env = require("dotenv").config()
const app = express()
const postsRoute = require("./Routes/postsRoute")
app.get('/', (req, res) => {
  res.send("Hello World");
})

app.use("/posts", postsRoute)