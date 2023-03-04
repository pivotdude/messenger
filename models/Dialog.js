const {Schema, model} = require(`mongoose`)

const schema = new Schema({
    _id: {type: String, unique: true},
    interlocutors: [{type: String, ref: 'User'}],
    messages: [{type: String, ref: 'Messages'},]
})

module.exports = model('Dialog', schema)