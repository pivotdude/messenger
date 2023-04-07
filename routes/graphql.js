var express = require('express');
var router = express.Router();
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const Dialog = require('../models/Dialog');
const User = require("../models/User");
const {v4: uuidv4} = require('uuid');

// type Mutation {
//     createUser(_id: String, name: String, email: String, password: String): User
//     writeMessage(dialogId: ID!, userId: ID!, message: String!): Message
// }

var schema = buildSchema(`
  type Query {
    users: [User]
    user (_id: ID!): User
    dialogs: [Dialog]
    dialog(_id: ID!): Dialog
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
    messages: [Message]
  }
  
  type User {
    _id: ID!
    name: String
    email: String
    password: String
    image: String
    regDate: String
    dialogIds: [Dialog!]
  }
`);

const genUuid = () => uuidv4();

var root = {
    users: async () => await User.find({}).populate('dialogIds'),
    user: async (args) => {
        const findUser = await User.findOne({_id: args._id}).populate('dialogIds').lean()

        let dialogId = 0
        for (dialog of findUser['dialogIds']) {
            let interLocutorId = 0
            for (interlocutor of dialog['interlocutors']){
                findUser['dialogIds'][dialogId]['interlocutors'][interLocutorId] = await User.findOne({_id: interlocutor})
                interLocutorId++;
            }
            dialogId++;
        }
        console.log(findUser['dialogIds'])
        return findUser
    },
    dialogs: async () => await Dialog.find({}).populate('interlocutors'),
    dialog: async (args) => await Dialog.findOne({_id: args._id}).populate('interlocutors'),
};

router.all('/', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
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