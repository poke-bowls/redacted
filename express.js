var express = require( 'express' );
var server = express();
var bodyParser = require( 'body-parser' );
var router = express.Router();

server.use( bodyParser.urlencoded({ extended: true }) );
server.use( '/', router );

var blackList = {
  selfie: 'self-portrait',
  yummers: 'delicious',
  outchea: 'are out here',
  bruh: 'wow',
  doge: 'pug',
  cilantro: 'soap',
  bae: 'loved one',
  swag: 'style',
  yolo: 'carpe diem'
};

//Middleware
router.post( '/message', function(req, res, next) {
  var str = req.body.message;
  for( var word in blackList ) {
    var re = new RegExp( word, "gi" );
    str = str.replace( re, blackList[word] );
  }
  res.send( { 'message' : str } );
  next();
});

var server = server.listen( 8888, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log( 'Redact App listening at http://%s:%s', host, port );
});