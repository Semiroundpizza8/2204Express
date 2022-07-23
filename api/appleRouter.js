const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send({
        color: "red",
        hasWorm: false
    })
});

module.exports = router;