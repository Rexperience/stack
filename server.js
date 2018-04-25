const express = require('express')

const compression = require('compression')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const helmet = require('helmet')
const mysql = require('mysql2')
const cors = require('cors')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(compression())
app.use(helmet())
app.use(cors())

const port = process.env.PORT || 3000

// Configure database connect here

app.get('/', (req, res) => {
    res.send('Ohai!')
})

app.listen(port, () => {
    console.log(`server is running on ${port} . . .`)
})