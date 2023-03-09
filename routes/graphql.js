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
    dialog (_id: ID, userId: ID): Dialog
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
    dialogIds: [Dialog]
  }
`);

const genUuid = () => uuidv4();

var root = {
    users: async () => await User.find({}),
    user: async (args) => {
        const res = await User.findOne({_id: args._id}).populate('dialogIds').populate('dialogIds.interlocutors').populate('dialogIds.messages').lean()
        // console.log(res['dialogIds'])

        const forResult = []
        for (let i=0; i < res['dialogIds'].length; i++) {
            res.dialogIds[i]['interlocutors'] = await User.find({_id:res.dialogIds[i]['interlocutors']}) 
            res.dialogIds[i]['messages'] = await Messages.find({dialogId: res['dialogIds'][i]})
            // for (let j=0; j < res.dialogIds[i]['messages'].length; j++) {
            //     console.log(res.dialogIds[i]['messages'].length)
            //     const datafor = await User.find({_id: res.dialogIds[i]['messages'][j]['sender']})
            //     // console.log(await User.find({_id: res.dialogIds[i]['messages'][j]['sender']}))
            //     res.dialogIds[i]['messages'][j]['sender'] = datafor
            // }

        }

        // console.log(res.dialogIds[0]['messages'][0]['sender'])
        // console.log(res.dialogIds[0]['messages'][0])

        return res
    },
    dialog: async (args) => {
        const res = await Dialog.findOne({_id: args._id}).populate('interlocutors').populate('messages').populate('messages.sender')
        console.log(res)
        return res
    },
    createUser: (args) => {
      const user = new User({_id: args._id, name: args.name, email: args.email, password: args.password})
      user.save()
      return user
    },
    writeMessage: async (args) => {
      const message = Dialog.findOneAndUpdate({_id: args.dialogId}, {$push : { messages: {_id: genUuid(), sender: args.userId, message: args.message}}})
      return Dialog.find({_id: args.dialogId}, 'messages')
    },
    messages: async (args) => await Messages.find({dialogId: args.dialogId}).populate('sender'),
    message: async (args) => await Messages.findOne({_id: args._id}).populate('sender')
};

router.all('/', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

module.exports = router;



//  query {
//   user (_id: "JohnMark912") {
//     dialogIds {
//       interlocutors {
//         _id
//         name
//         email
//       }
//       _id
//       messages {
//         message
//         sender 
//         time
//       }
//     }
//   }
// }

// {
//   dialog (_id: "f85edb1f-7d1f-4d64-af38-3cb6c685202e") {
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

// query {
//     messages (dialogId: "f85edb1f-7d1f-4d64-af38-3cb6c685202e") {
//         _id
//         message
//         sender {
//             name
//             _id
//             email
//         }
//         time
//     }
// }