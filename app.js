// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrashTalk = require('./trash_talk')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//set static file
app.use(express.static('public'))

// set body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const option = req.body
  const trashTalk = generateTrashTalk(option)
  res.render('index', { trashTalk: trashTalk, option: option })
})

// starts the express server and listening for connections
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})

