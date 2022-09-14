const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const AccountModel = require('./models/account')
var accountRouter = require('./router/account')
const path = require('path')


//setup express static
app.use('/public', express.static(path.join(__dirname, './public')))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post("/register", (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    console.log(username, password)

    //check user da ton tai trong db chua neu chua moi create
    AccountModel.findOne({
            username: username
        })
        .then(data => {
            if (data) {
                res.json('username exists')
            } else {
                //return data sau do chay tiep xuong .then() duoi (Promise)
                return AccountModel.create({
                    username: username,
                    password: password
                })
            }
        })
        .then(data => {
            res.json('create account successfully');
        })
        .catch(err => {
            res.status(500).json('created Faild')
                //console.log('created Faild', err);
        })
})

app.post("/login", (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    AccountModel.findOne({
            username: username,
            password: password
        })
        .then(data => {
            if (data) {
                res.json("Login completed")
            } else {
                res.json("Login Faild")
            }
        })
        .catch(err => {
            res.status(500).json('server Errors', err)
        })
})

app.use('/api/account', accountRouter)




//setup static file
app.get("/", (req, res, next) => {
    var pathfile = path.join(__dirname, './public/home.html')
    res.sendFile(pathfile)
})



//app listen om port local
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

//after deploy to heroku
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})