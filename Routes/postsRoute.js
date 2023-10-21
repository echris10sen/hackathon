const express = require("express")
const router = new express.Router()
const postController = require("../controllers/postsController")

router.get('/' , async function (req, res) {
    postController.getPosts(req, res)
})

router.get("/add", async (req, res) => {
    res.send("This function is not yet available to add")
})

router.get("/update" , async (req, res) => {
    res.send("This function is not yet available to update")
})

router.get("/delete" ,(req, res) => {
    res.send("This function is not yet available to delete")
})

router.get("/:event_id", (req, res) => {
    res.send("This function is not yet available to get an event")
})
// postController.getPostsData)

module.exports = router;