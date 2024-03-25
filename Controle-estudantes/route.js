
const express = require('express');
const route = express.Router();


const home = require('./src/controllers/home');
const cadastro_sala = require('./src/controllers/cadastro_sala');
const cadastro_aluno = require('./src/controllers/cadastro_aluno');

const multer = require('multer');
const multerConfig = require('./src/config/multer');

route.get('/', home.pagInicialGet);
route.post('/', home.pagInicialPost);

route.get('/alunos', cadastro_aluno.pagAlunosGet);
// route.post('/alunos', cadastro_aluno.alunoInsert);

route.get('/salas', cadastro_sala.pagSalasGet);
route.post('/salas', cadastro_sala.salaInsert);

route.get('/editar/:id',home.pagEditarGet);
route.post('/editar/:id', multer({ storage: multerConfig }).single('foto_aluno'), home.pagEditarPost);


route.post('/alunos', multer({ storage: multerConfig }).single('foto_aluno'), cadastro_aluno.alunoInsert);

module.exports = route;