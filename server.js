//Start a service converting:
// msgpack -> JSON
// JSON -> msgpack
//
// CBOR -> JSON
// JSON -> CBOR
//
// BSON -> JSON
// JSON -> BSON



const express = require('express')
var bodyParser = require('body-parser')
var msgpack = require('msgpack');
var cbor = require('cbor');
var BSON = require('bson')
var conditional = require('express-conditional-middleware');
const app = express()

var bson = new BSON();


var concat = require('concat-stream');

function isJson(req){
    if(req==undefined){
        return false;
    }
    if(req.headers==undefined){
        return false;
    }
    if(req.headers['content-type']==undefined){
        return false;
    }
    if(req.headers['content-type'].indexOf('application/json')>=0){
        return true;
    }
    return false;
}

app.use(conditional(
    function (req, res, next) {
        return isJson(req);
    }
    , bodyParser.json()));

app.use(conditional(
    function (req, res, next) {
        return !isJson(req);
    }
    , function (req, res, next) {
    req.pipe(concat(function(data){
        req.body = data;
        next();
    }));
}));

testJSON={'text': 'text','list': ['example', 'message'],'boolean': true, 'integer': 123, 'nest':{'one':'bird'}};

//START LISTENING
app.listen(3000, () => console.log('Binary endpoints listening on port 3000!'))

////////ENDPOINTS///////

//ROOT
app.get('/', (req, res) => res.send('Call /messagepack or /CBOR or /BSON only to generate a binary file or folowed by /pack or /unpack'))


//MessagePack endpoint
app.get('/messagepack', (req, res) =>{
    res.send(msgpack.pack(testJSON));
    res.status(200);
})

app.post('/messagepack/pack', (req, res) =>{
    var packed;
    
    try{
        packed = msgpack.pack(req.body);
    }catch (err){
        packed = {'ERROR': err.message};
        res.status(400);
    }

    console.log('POST in /message/pack >>');
    console.log(req.body);
    console.log('REPLY >>');
    console.log(packed);
    console.log('');
    
    res.send(packed);
    res.status(200);
})

app.post('/messagepack/unpack', (req, res) =>{
    var unpacked;

    try{
        unpacked = msgpack.unpack(req.body);
    }catch (err){
        unpacked = {'ERROR': err.message};
        res.status(400);
    }

    
    console.log('POST in /message/unpack >>');
    console.log(req.body);
    console.log('REPLY >>');
    console.log(unpacked);
    console.log('');

    res.send(unpacked);
    res.status(200);
})


//CBOR endpoint
app.get('/CBOR', (req, res) =>{
    res.send(cbor.encode(testJSON));
    res.status(200);
})

app.post('/CBOR/pack', (req, res) =>{
    var packed;
    
    try{
        packed =cbor.encode(req.body);
    }catch (err){
        packed = {'ERROR': err.message};
        res.status(400);
    }


    console.log('POST in /CBOR/pack >>');
    console.log(req.body);
    console.log('REPLY >>');
    console.log(packed);
    console.log('');

    res.send(packed);
    res.status(200);
})

app.post('/CBOR/unpack', (req, res) =>{
    var unpacked;
    
    try{
        unpacked =cbor.decodeAllSync(req.body);
    }catch (err){
        unpacked = {'ERROR': err.message};
        res.status(400);
    }

    console.log('POST in /CBOR/unpack >>');
    console.log(req.body);
    console.log('REPLY >>');
    console.log(unpacked);
    console.log('');

    res.send(unpacked);
    res.status(200);
})


//BSON endpoint
app.get('/BSON', (req, res) =>{
    res.send(bson.serialize(testJSON));
    res.status(200);
})

app.post('/BSON/pack', (req, res) =>{
    var packed;
    
    try{
        packed = bson.serialize(req.body);
    }catch (err){
        packed = {'ERROR': err.message};
        res.status(400);
    }

    console.log('POST in /BSON/pack >>');
    console.log(req.body);
    console.log('REPLY >>');
    console.log(packed);
    console.log('');

    res.send(packed);
    res.status(200);
})

app.post('/BSON/unpack', (req, res) =>{
    var unpacked;
    
    try{
        unpacked = bson.deserialize(req.body);
    }catch (err){
        unpacked = {'ERROR': err.message};
        res.status(400);
    }


    console.log('POST in /BSON/unpack >>');
    console.log(req.body);
    console.log('REPLY >>');
    console.log(unpacked);
    console.log('');

    res.send(unpacked);
    res.status(200);
})


