// API
const express = require("express")
const env = require("dotenv").config()
const app = express()
// const postsRoute = require("./Routes/postsRoute.js")
const postModel = require("./models/postModel")
app.get('/', (req, res) => {
  console.log("Someone connected");
  res.send("Hello World");
})

app.use("/posts", (req, res) =>{
  console.log("Someone connected");
  let data = postModel.getPostsData()
  res.json(data)
})


const port = process.env.PORT
const host = process.env.HOST

app.listen(port, ()=> {
  console.log(`app listening on http://${host}:${port}/posts`);  
})