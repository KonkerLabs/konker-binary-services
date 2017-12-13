# konker-binary-services

Node.js services that convert CBOR, MessagePack and BSON  to JSON and vice-versa
 
 ## msgpack
 GET msgpack \<this-server-adress\>:3000/msgpack
 
    RESPONSE is a msgpack encoded JSON {'name':'earth', 'planet':true, 'number': 3, 'gravity': 9.807}
 
 POST msgpack body to: \<this-server-adress\>:3000/msgpack/unpack
 
    RESPONSE: msgpack converted to JSON 
 
 
 POST JSON body to: \<this-server-adress\>:3000/msgpack/pack
 
    RESPONSE: JSON converted to msgpack 
 
 
 ## CBOR
 GET CBOR \<this-server-adress\>:3000/CBOR
 
    RESPONSE is a CBOR encoded JSON {'name':'earth', 'planet':true, 'number': 3, 'gravity': 9.807}
 
 POST CBOR body to: \<this-server-adress\>:3000/CBOR/unpack
 
    RESPONSE: CBOR converted to JSON 
 
 
 POST JSON body to: \<this-server-adress\>:3000/CBOR/pack
 
    RESPONSE: JSON converted to CBOR 
 
  
 ## BSON
 GET BSON \<this-server-adress\>:3000/BSON
 
    RESPONSE is a BSON encoded JSON {'name':'earth', 'planet':true, 'number': 3, 'gravity': 9.807}
 
 POST BSON body to:\<this-server-adress\>:3000/BSON/unpack
 
    RESPONSE: BSON converted to JSON
 
 POST JSON body to: \<this-server-adress\>:3000/BSON/pack
 
    RESPONSE: JSON converted to BSON 

## Install

```sh
git clone https://github.com/KonkerLabs/konker-binary-services
cd konker-binary-services
npm install
```
If you having errors, try this:
```sh
npm rebuild
```
## Start

```sh
npm start
```
