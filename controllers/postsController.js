// const postModel = require("../models/posts-model");

const postPkg = {}

postPkg.getPostsData = async function (req, res, next) {
    console.log("not here");
    res.send("Hello World");
}

module.exports = postPkg;