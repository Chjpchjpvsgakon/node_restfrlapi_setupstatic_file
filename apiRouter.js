const express = require('express')
const router = express.Router()



router.get("/", (req, res) => {
    //res.send('Hello World!')
    res.json('router 1 user')
})

router.get("/product", (req, res) => {
    //url /api/v1/product
    res.json('router 1 product')
})

router.get("/cart", (req, res) => {
    ///url /api/v1/cart
    res.json('router 1 cart')
})


router.get("/:id", (req, res) => {
    //res.send('Hello World!')
    res.json('router 1 user' + req.params.id)
})

router.post("/", (req, res) => {
    //sau khi require bodyparser
    //console.log(req.body)
    //res.json(req.headers)
    res.json(req.body)
    res.json('router1 user Post')
})
router.put("/", (req, res) => {
    res.json('router1 user put')
})
router.delete("/", (req, res) => {
    res.json('router1 user delete')
})

module.exports = router