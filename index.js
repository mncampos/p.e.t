require('dotenv').config({path: "./config.env"})
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)
var path = require("path");

const MAX_TIME = 1000 * 60 * 60 * 3 //Tempo que o usuário ficará logado -> 3h

const mongoDBStore = new MongoDBStore({
    uri: process.env.DATABASE_CONNECTION_STRING,
    collection: 'sessions',
})



const loginRouter = require('./routes/loginRoutes')

const app = express()
const port = process.env.PORT || 5000



mongoose.Promise = global.Promise
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
  useNewUrlParser: true,
}, (err) => { if (!err) console.log('Database connected succesfully!')})

app.use(session({
    secret: 'aeoj12091ss',
    name: 'session-id',
    store: mongoDBStore,
    cookie: {
        maxAge: MAX_TIME,
        sameSite: false,
        secure: false,
    },
    resave: true,
    saveUninitialized: false,
})
)
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// ROUTERS
app.use('/api', loginRouter)

// START SERVER
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

module.exports = app
