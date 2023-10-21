const pool = require("../database")

async function getPostsData(post_id) {
    try {
         const data = await pool.query(
            `SELECT * FROM public.posts`
        )
        console.log(data.rows); 
        return data.rows               
        } catch (error) {
            console.error("Error in GetPostData")
        }

}

module.exports = { getPostsData }