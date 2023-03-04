const {Schema, model} = require(`mongoose`)

const schema = new Schema({
    _id: String,
    message: String,
    sender: {type: String, ref: 'User'},
    time: {type: Date, default: new Date()},
    dialogId: {type: String, ref: 'Dialog'},
})

module.exports = model('Messages', schema)