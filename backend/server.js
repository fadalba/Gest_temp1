const express = require('express') 
const cors = require('cors')
const bodyParser = require('body-parser') 
const mongoose = require('mongoose')
var router = express.Router();

const api = require('./routes/auth.routes')

mongoose
.connect('mongodb+srv://fadalba:Thiaroye44@cluster0.daoknxe.mongodb.net/test')
  
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })

// Express settings
const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)
app.use(cors())

// Serve static resources
app.use('/images', express.static('images'))
app.use('/api', api)

// Error favicon.ico
app.get('/favicon.ico', (req, res) => res.status(204))

// Define PORT
const port = process.env.PORT || 4000

const server = app.listen(port, () => {
  console.log('connecté au port ' + port)
})

//route pour le model pour l'historique de a semaine  
router.route('/hist').get((req, res, next) =>{
  histo.find((error, response)=>{
      if (error){
          return next(error);
      }
      else{
          return res.status(200).json(response)
      }
  })
})


// Express error handling
app.use((req, res, next) => {
  setImmediate(() => {
    next(new Error('Something went wrong'))
  })
})

app.use(function (err, req, res, next) {
  console.error(err.message)
  if (!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})



