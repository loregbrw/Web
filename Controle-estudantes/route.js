

const express = require('express');
const route = express.Router();


const home = require('./src/controllers/home');
const cadastro_sala = require('./src/controllers/cadastro_sala');
const cadastro_aluno = require('./src/controllers/cadastro_aluno');


route.get('/', home.pagInicialGet);

route.get('/alunos', cadastro_aluno.pagAlunosGet);
route.post('/alunos', cadastro_aluno.alunoInsert);

route.get('/salas', cadastro_sala.pagSalasGet);
route.post('/salas', cadastro_sala.salaInsert);


module.exports = route;
