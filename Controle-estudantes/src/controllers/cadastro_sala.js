const sala = require('../model/sala');
const aluno = require('../model/aluno');

module.exports = {
    async pagSalasGet(req, res){
        res.render('../views/salas');
    },

    async salaInsert(req, res) {

        const dados = req.body;

        await sala.create({
            Nome: dados.nome_sala,
            Capacidade: dados.capacidade_sala
        });

        res.redirect('/');
    },
}