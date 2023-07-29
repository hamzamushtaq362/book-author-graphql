const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema=require('./schema/schema');
var cors = require('cors')

const app = express();

// Allow cross access
app.use(cors())
const bodyParser = require('body-parser');
const mongoose = require('./api/helper/db-connect');

const port = 2000;

app.use(bodyParser.json());

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true,
}));

var db = mongoose()
app.get('/',(req,res)=>{
    return res.status(200).json({
        message:'I am working'
    })
});

app.listen(port,()=>{
    console.log('working------')
})