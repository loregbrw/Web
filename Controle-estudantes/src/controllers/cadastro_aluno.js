const sala = require('../model/sala');
const aluno = require('../model/aluno');

module.exports = {
    async pagAlunosGet(req, res) {

        const salas = await sala.findAll({
            raw: true,
            attributes: ['IDSala', 'Nome']
        });
        res.render('../views/alunos', {salas});
    },

    async alunoInsert(req, res) {

        const dados = req.body;

        let foto;
        if (req.file) {
            foto = req.file.filename;
        } else {
            foto = 'usuario.png';
        }
        console.log(req.body);
        await aluno.create({
            Foto: foto,
            Nome: dados.nome_aluno,
            Idade: dados.idade_aluno,
            Sexo: dados.sexo_aluno,
            IDSala: dados.sala_aluno
        });

        res.redirect('/');
    },
}