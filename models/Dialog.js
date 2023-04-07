const {Schema, model} = require(`mongoose`)

const schema = new Schema({
    _id: {type: String, unique: true},
    interlocutors: [{type: String, ref: 'User'}],
    messages: [
    {
        _id: String,
        message: String,
        sender: {type: String, ref: 'User'},
        time: {type: Date, default: new Date()}
    }]
})

module.exports = model('Dialog', schema)