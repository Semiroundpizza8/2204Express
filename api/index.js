const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send(`
            <h1>Front-end app</h1>
        `)
});

const appleRouter = require('./appleRouter');
router.use('/apple', appleRouter)

const postsRouter = require('./postsRouter')
router.use('/posts', postsRouter);

module.exports = router;