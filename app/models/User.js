const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/7expressjs', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

const schema = new mongoose.Schema({
    name: String,
    address: {
        street: String,
        suite: String, 
        city: String, 
        zipcode: String
    }, 
    website: String
});

module.exports = mongoose.model('User', schema);

// Translations.js
// _id, language: String, content: String

// model Question.js - analogicznie, dec: String, translation - relacja 1 do wielu 
