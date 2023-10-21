const express = require("express")
const router = new express.Router()


router.get("/:postId", postController.getPostsData)