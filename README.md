# konker-binary-services

Node.js services that convert CBOR, MessagePack and BSON  to JSON and vice-versa
 
 #msgpack
 POST msgpack body to: <this-server-adress>:3000/msgpack/unpack  RESPONSE-> msgpack converted to JSON 
 POST JSON body to: <this-server-adress>:3000/msgpack/pack  RESPONSE-> JSON converted to msgpack 
 
 ##CBOR
 POST CBOR body to: <this-server-adress>:3000/CBOR/unpack  RESPONSE-> CBOR converted to JSON 
 POST JSON body to: <this-server-adress>:3000/CBOR/pack  RESPONSE-> JSON converted to CBOR 
 
 ##BSON
 POST BSON body to: <this-server-adress>:3000/BSON/unpack  RESPONSE-> BSON converted to JSON 
 POST JSON body to: <this-server-adress>:3000/BSON/pack  RESPONSE-> JSON converted to BSON 

## Install

```sh
git clone https://github.com/KonkerLabs/konker-binary-services
cd konker-binary-services
npm install
```
## Start

```sh
npm start
```
