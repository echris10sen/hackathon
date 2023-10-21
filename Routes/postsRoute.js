const express = require("express")
const router = new express.Router()
const postController = require("../controllers/postsController")

router.get("/posts", postController.getPostsData())

module.exports = router;