const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const apiRouter = require('./routes/api');
const graphqlRouter = require('./routes/graphql');
const crypto = require("crypto");
const cors = require('cors')

const app = express();
app.use(cors())



start()
AuthParse()

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'authorization, content-type');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);
app.use('/graphql', graphqlRouter);

module.exports = app;

function AuthParse() {
    app.use((req, res, next) => {
        if (req.headers['authorization']) {
            // console.log(res.headers['Authorization'].replace('Bearer ', ''))
            let tokenParts = req.headers.authorization.split('.')

            let signature = crypto.createHmac('SHA256', process.env.SECRET_TOKEN)
                .update(`${tokenParts[0]}.${tokenParts[1]}`)
                .digest('base64')
                .replace('=', '')
                .replace(/\+/g, '-')
                .replace(/\//g, '_')
            // console.log(`'${signature}' == '${tokenParts[2]}'`)

            if (signature === tokenParts[2]) {
                req.user = JSON.parse(Buffer.from(tokenParts[1], 'base64').toString('utf8'))
            }
        }
        next()
    })
}

async function start() {
    try {
        await mongoose.connect(process.env.DB_CONNECT, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`Mongoose connected`)
    } catch (e) {
        console.log('Server error: ' + e.message)
        process.exit(1)
    }
}
