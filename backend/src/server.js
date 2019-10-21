const express = require('express')
const routes = require('./routes') // importando as rotas de routes.js.
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path') // Para lidar com caminhos dentro da nossa aplicação.

const app = express();

mongoose.connect('mongodb+srv://mario:marioh15@omnistack-d7v6k.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//GET POST PUT DELETE
// req.query = acessar req params(para filtros).
// req.params = para acessar route params (alterar , deletar).
//req.body = acessar corpo da requisiçao (criação , edição).

app.use(cors()) // Controla quem pode acessar essa API,qual URL pode acessar ela.
app.use(express.json()); //Avisando o express que ele vai receber dados em json da tela.
app.use('/files',express.static(path.resolve(__dirname, '..','uploads')))
app.use(routes) // Para usar as rotas.
app.listen(3333) //definindo a porta que o servidor vai usar.