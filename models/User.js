const {Schema, model} = require(`mongoose`)

const schema = new Schema({
    _id: {type: String, unique: true},
    name: {type: String, require: true},
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    image: {type: String, default: ''},
    regDate: {type: Date, default: new Date},
    dialogIds: [
        {type: String, ref: 'Dialog'},
    ],
})

module.exports = model('User', schema)