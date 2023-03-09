const express = require('express');
const router = express.Router();
const User = require("../models/User");
const Dialog = require("../models/Dialog");
const {v4: uuidv4} = require('uuid');
const Messages = require("./../models/Messages");
const {check, validationResult} = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

router.post(
    '/login',
    async function (req, res) {
        console.log(req.user)
        try {
            const {email, password} = req.body
            let user = await User.findOne({email})

            if (!user) {
                return res.status(400).json({success: false, message: 'Пользователя не зарегистрирован'})
            }
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                return res.status(400).json({success: false, message: 'Некорректные данные'})
            }
            const token = jwt.sign(
                {userId: user._id},
                process.env.SECRET_TOKEN, // SecretTOKEN
                {expiresIn: '1h'}
            )
            res.json({
                success: true,
                message: '',
                token,
            })
        } catch (e) {
            res.status(500).json({"message": `${e}`})
        }
    })

router.post('/registration',
    [
        check('email', 'Некорректный email').isEmail(),
        check('password', "Пароль должен состоять минимум из 6 символов").isLength({min: 6}),
        check('login', "Логин должен существовать").exists(),
        check('name', "Никнейм должен состоять минимум из 4 букв").isLength({min: 4}),
        check('repeatPassword', "Пароли должны совпадать").custom((value, { req }) => value === req.body.password),
    ],
    async function (req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {

                return res.status(400).json({
                    success: false,
                    message: errors.array()
                })
            }

            const {email, password, name, login} = req.body


            const candidate = await User.findOne({email: email})
            if (candidate) {
                return res.status(400).json({success: false, message: 'Пользователь на эту почту уже зарегестрирован'})
            }

            const candidateE = await User.findOne({_id: login})
            if (candidateE) {
                return res.status(400).json({success: false, message: 'Пользователь на этот логин уже зарегестрирован'})
            }


            // const id = Math.random().toString(16).slice(2)
            const hasedPassword = await bcrypt.hash(password, 12)
            const user = new User({_id: login, email, password: hasedPassword, name}) // В место массива в последствии передавать value из localstorage
            await user.save()

            res.status(201).json({success: true, message: "Пользователь создан"})

        } catch (e) {
            console.log(e)
            res.status(500).json({"message": `${e}`})
        }
    })


module.exports = router;
