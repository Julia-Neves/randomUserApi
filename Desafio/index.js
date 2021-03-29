const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;

app.listen(3000, () => console.log('servidor rodando na porta 3000'));

app.get('/', (req, res) => { res.send
(
  { 
    primeiro_nome: faker.name.firstName(),
    segundo_nome: faker.name.lastName(),
    genero: faker.name.gender(),
    nascimento: faker.date.past(65,2000).toLocaleDateString(),
    email:faker.internet.email(),
    senha:faker.internet.password(),
  }
);
});