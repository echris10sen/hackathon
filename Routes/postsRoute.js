const express = require("express")
const router = new express.Router()
const postController

router.get("/:postId", postController.getPostsData)