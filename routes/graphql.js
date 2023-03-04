var express = require('express');
var router = express.Router();
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const Dialog = require('../models/Dialog');
const User = require("../models/User");
const {v4: uuidv4} = require('uuid');
const Messages = require("../models/Messages");


var schema = buildSchema(`
  type Query {
    users: [User]
    user (_id: ID!): User
    dialog (_id: ID!): Dialog
    message (_id: ID!): Message
    messages (dialogId: ID!): [Message!]
  }

  type Mutation {
    createUser(_id: String, name: String, email: String, password: String): User
    writeMessage(dialogId: ID!, userId: ID!, message: String!): Message
  }

  type Message {
    _id: String,
    message: String,
    sender: String,
    time: String
  }

  type Dialog {
    _id: ID!
    interlocutors: [User]
    messages: [Message!]
  }


  type User {
    _id: ID!
    name: String
    email: String
    password: String
    image: String
    regDate: String
    dialogIds: [String!]
  }
`);

const genUuid = () => uuidv4();

var root = {
    users: async () => await User.find({}),
    user: async (args) => await User.findOne({_id: args.id}),
    dialog: async (args) => await Dialog.findOne({_id: args._id}).populate('interlocutors').populate('messages'),
    createUser: (args) => {
      const user = new User({_id: args._id, name: args.name, email: args.email, password: args.password})
      user.save()
      return user
    },
    writeMessage: async (args) => {
      const message = Dialog.findOneAndUpdate({_id: args.dialogId}, {$push : { messages: {_id: genUuid(), sender: args.userId, message: args.message}}})
      return Dialog.find({_id: args.dialogId}, 'messages')
    },
    messages: async (args) => await Messages.find({dialogId: args.dialogId}),
    message: async (args) => await Messages.findOne({_id: args._id})
};

router.all('/', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

module.exports = router;


// {
//   dialog (id: "3971a9d3-e736-4110-b714-ee7504636694") {
//     interlocutors {
//       _id
//       name
//       image
//     }
//     messages {
//       _id
//       message
//       sender
//       time
//     }
//   }
// }



// mutation {
//   createUser (_id: "Mues2133", name: "Mue Stevenson", email: "mynewemaisl@gmail.com", password: "MueMueMue21" ) {
// 		name
//     email
//     regDate
//     dialogIds
//   }
// }