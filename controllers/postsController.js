const postModel = require("../models/postModel");

const postPkg = {}

postPkg.getPosts = async function (req, res, next) {
    let posts = await postModel.getPostsData();
    let data = await {
        "posts": posts
    }
    res.json(data);
}

postPkg.addPost = async function (req, res, next) {
    postModel.getPostsData(req, res)
}

module.exports = postPkg;