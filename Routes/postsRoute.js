const express = require("express")
const router = new express.Router()
const postController = require("../controllers/postsController")

router.get("/posts", (res,req, next) => {
    res.send("Im in posts")
})
// postController.getPostsData)

module.exports = router;