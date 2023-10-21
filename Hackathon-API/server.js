// API
const express = require("express")
const env = require("dotenv").config()
const app = express()
const postsRoute = require

app.use("/posts", postsRoute)