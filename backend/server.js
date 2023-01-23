const express = require('express') 
const cors = require('cors')
const bodyParser = require('body-parser') //ça fait quoi ?
const mongoose = require('mongoose')
// Express APIs
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
  console.log('Connected to port ' + port)
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

<<<<<<< HEAD
/* *********************** Notre websocket************************ */

// on install avec npm install http, url et ws
//ws : Qui va nous permettre de créer une connexion Web-socket
//http : Qui va nous permettre de créer un serveur HTTP
//url : Qui va nous permettre de gérer et parser des url pour le serveur HTTP
const http = require('http');
const url = require('url');
const wsServer = require('ws').Server;
 // on a besoin de 2 variables qui vont correspondre aux ports de connexions pour le serveur http et les WebSockets. 
 
const HTTP_PORT = 8080;                                                                                                                                                                                                                                                                                                                                             
const WS_PORT = 4040;

// La fonction anonyme passée en paramètre de http.createServeur() se déclenche lorsqu’un client http va se connecter au serveur 
//et la fonction passée en paramètre de listen() se déclenche lorsque le serveur commence à écouter le port HTTP_PORT 
//(en gros, lorsque le serveur est prêt).
// on peut tester le server avec node index.js
http.createServer(function(req, res) {
  //  On utilise url.parse() pour récupérer l’url complète de la requête. Cela va nous permettre de pouvoir implémenter des 
 //   comportement différents en fonction de l’url. Pour l’instant, si on détecte que la requête a été faite sur le 
   // chemin “/broadcast” on retourne au client HTTP le message qu’il nous a envoyé afin de confirmer sa bonne réception.
  // On utilise parsedUrl.query pour récupérer les paramètres de la requête GET qui ont été passés dans l’url. 
  //Dans notre cas on désire que le client ait passé le paramètre “message”
   let parsedUrl = url.parse(req.url, true);
    let query = parsedUrl.query;
    let reponse = 'Bonjour Fadel, vous n"avez pas de message';
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    if (parsedUrl.pathname == '/broadcast' &&
        query.message != null
    ) {
        res.end('Bonjour Fadel, votre message est :' + query.message);
       // On utilise le serveur WebSocket pour parcourir tous les clients connectés puis leur envoyer le message msg passé 
     //   en paramètre de la fonction broadcast().
        broadcast(query.message);
    }
    res.end(reponse);
}).listen(HTTP_PORT, function() {
    console.log("HTTP Server listening on: http://localhost:%s", HTTP_PORT);
});

//new wsServeur() va créer un serveur WebSocket accessible sur ws://localhost et sur le port WS_PORT (4040 dans notre cas)
const ws = new wsServer({ port: WS_PORT }, function() {
    console.log("Bonjour Fadel, votre Web socket est au port: ws://localhost:%s", WS_PORT);
});

ws.on('connection', function connection(ws) {
    console.log('bonjour Fadel, nouvelle donnée');
});

/** parcours de la liste des clients  connectés**/
function broadcast(msg) {
    ws.clients.forEach(function each(client) {
        client.send(msg); 
    });
};

//Maintenant, lorsque vous relancez le serveur Node et que vous allez sur l’url :

//http://localhost:8080/broadcast?message=Hello
=======

// ici la partie iot

>>>>>>> 8bc2ecb8e7f856a6207422d0423439b84b77dca0
