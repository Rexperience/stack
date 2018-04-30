const express = require('express')

const compression = require('compression')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const helmet = require('helmet')
const mysql = require('mysql2')
const chalk = require('chalk')
const cors = require('cors')

const app = express()
const router = express.Router()

app.use(morgan(function (tokens, req, res) {
    return chalk.blue(tokens.method(req, res))
      + ' ' + chalk.green(tokens.url(req, res))
      + ' ' + chalk.red(tokens['response-time'](req, res))
  }))
app.use(bodyParser.json())
app.use(compression())
app.use(helmet())
app.use(cors())

//make root dir serve landing page
app.use('/', express.static('src'))

const port = process.env.PORT || 3000

// Configure database connect here
var database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database:'blog'
})

database.connect()

app.get('/', (req, res) => {
    console.log('Ohai!');
    concole.log(Date.now());
})

app.post('/create', (req, res) => {
    let q = 'insert into post (_title, _post) values (${title},${post} );'
    database.query(q, (err, result) => {
        if (err) throw err
        console.debug('Post Created!')
        res.send(JSON.stringify(result))
    })
})

app.get('/post', (req, res) => {
    let q = 'select * from post'
    database.query(q, (err, result) => {
        if(err) throw err
        console.log('Post fetched')
        res.send(JSON.stringify(result))
    })
})


app.listen(port, () => {
    console.log(`server is running on ${port} . . .`)
})
