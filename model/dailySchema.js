const mongoose = require('mongoose')

const dailySchema = new mongoose.Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    created: {
        type: Date
    }
})

module.exports = dailySchema
