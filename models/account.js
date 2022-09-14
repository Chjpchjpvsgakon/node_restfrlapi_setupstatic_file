const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/node_restapidemo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const AccountSchema = new mongoose.Schema({
    username: String,
    password: String
}, {
    collection: "Account"
})

const AccountModel = mongoose.model('account', AccountSchema);

module.exports = AccountModel