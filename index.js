const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema2');

const app = express();

app.listen(5000,() =>{
    console.log("Estou escutando na porta 5000")
})

app.use("/index",(req,res) =>{
    res.send("Olá Mundo. Bem vindo a nossa api")
})

app.use(
    "/graphql",
    graphqlHTTP({
    schema: schema,
    graphiql: true,
})); 
