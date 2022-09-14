const express = require('express');
var router = express.Router();
const AccountModel = require('../models/account')
    // const bodyParser = require('body-parser')

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())


//get all data
router.get("/", (req, res, next) => {
        AccountModel.find({})
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json("Error", err)
            })
    })
    //get data by id
router.get("/:id", (req, res, next) => {
    var id = req.params.id
    AccountModel.findById(id)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(500).json("Error", err)
        })
})


//add-create new data
router.post("/", (req, res, next) => {
    var usrname = req.body.username;
    var usrpwd = req.body.password;
    AccountModel.create({
            username: usrname,
            password: usrpwd
        })
        .then(data => {
            res.json("Account add new successfully")
        })
        .catch(err => {
            res.status(500).json(err)
        })
})


//update data
router.put("/:id", (req, res, next) => {
    var id = req.params.id
    var newusrpwd = req.body.newPassword

    AccountModel.findByIdAndUpdate(id, {
            password: newusrpwd
        })
        .then(data => {
            res.json("Update successfully")
        })
        .catch(err => {
            res.status(500).json(err)
        })
})


//delete data
router.delete("/:id", (req, res, next) => {
    var id = req.params.id
    AccountModel.deleteOne({
            _id: id
        })
        .then(data => {
            res.json("Delete successfully")
        })
        .catch(err => {
            res.status(500).json(err)
        })
})




module.exports = router