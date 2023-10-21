const pool = require("../database")

async function getPostsData(post_id) {
        const data = await pool.query(
                `SELECT * FROM public.posts`
        )
        console.log(data.rows);
}

module.exports = { getPostsData }