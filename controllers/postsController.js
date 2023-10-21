const postModel = require("../models/posts-model");

const postPkg = {}

postPkg.getPostsData = async function (req, res, next) {
    const post_id = req.params.postId;
    res.send(["Hello World"]);
}