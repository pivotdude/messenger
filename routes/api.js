const express = require('express');
const router = express.Router();
const User = require("../models/User");
const Dialog = require("../models/Dialog");
const {v4: uuidv4} = require('uuid');
const Messages = require("./../models/Messages");

const genUuid = () => uuidv4();

/* GET home page. */
 router.get('/create', async (req, res, next) => {
  const dialogId = genUuid()
     const messageId = genUuid()
   // const user = await new User({_id: 'JohnMark912', name: 'John Johnson', email: 'johnmarked@gmail.com', password: 'john912', dialogIds: [dialogId]})
   // const user2 = await new User({_id: 'LizaBoy1', name: 'Liza Tray', email: 'lizaTray@gmail.com', password: 'lizzzed13', dialogIds: [dialogId]})
   // const dialog = await new Dialog(
   //  {_id: dialogId,
   //    interlocutors: ['JohnMark912', 'LizaBoy1'],
   //    messages: [
   //        messageId
   //    ]
   //  })
     const message = await new Messages(        {
         _id: messageId,
         message: 'Привет!',
         sender: 'LizaBoy1',
         dialogId: "f85edb1f-7d1f-4d64-af38-3cb6c685202e"
     })

     await message.save()


   // await dialog.save()
     // await user.save()
     // await user2.save()
});

router.get('/message', async (req, res, next) => {

});

module.exports = router;
