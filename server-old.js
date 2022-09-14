const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


var route1 = require('./apiRouter.js');

app.use('/admin/api/v1', route1)


//app listen om port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})