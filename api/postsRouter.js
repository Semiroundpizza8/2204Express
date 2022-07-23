const express = require("express");
const router = express.Router();

const posts = [
    { id: 1, message: "First Post" },
    { id: 2, message: "Second Post" },
    { id: 3, message: "Third Post" },
];

router.get('/', async (req, res, next) => {
    res.send(posts)
});

router.get('/:postIndex', (req, res, next) => {
    try {
        const post = posts[req.params.postIndex];
        if (!post) throw new Error("No post exists at this index");
        res.send(post);
    } catch (err) {
        // next(err);
        res.status(404).send("No Post Found")
    }
})

router.post('/', (req, res, next) => {
    console.log(req.body)
    posts.push({
        id: req.body.id,
        message: req.body.message
    })

    res.send(posts)
})

module.exports = router;