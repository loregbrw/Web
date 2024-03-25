const sala = require('../model/sala');
const aluno = require('../model/aluno');

module.exports = {
    async pagInicialGet(req, res) {

        const salas = await sala.findAll({
            raw: true,
            attributes: ['IDSala', 'Nome']
        });

        const alunos = await aluno.findAll({
            raw: true,
            attributes: ['IDAluno', 'Nome', 'Idade', 'Sexo', 'Foto']
        });

        res.render('../views/index', { salas, alunos, id: '' });
    },
    async pagInicialPost(req, res) {
        const id = req.body.nome;

        const alunos = await aluno.findAll({
            raw: true,
            attributes: ['IDAluno', 'Nome', 'Idade', 'Sexo', 'Foto'],
            where: { IDSala: id }
        });

        const salas = await sala.findAll({
            raw: true,
            attributes: ['IDSala', 'Nome']
        });

        res.render('../views/index', { salas, alunos, id });
    },

    async pagEditarGet(req, res) {
        const parametro = req.params.id;

        const salas = await sala.findAll({
            raw: true,
            attributes: ['IDSala', 'Nome']
        });

        const alunos = await aluno.findByPk(parametro, {
            raw: true,
            attributes: ['IDAluno', 'Nome', 'Idade', 'Sexo', 'Foto', 'IDSala']
        });

        res.render('../views/editar', { salas, alunos });
    },

    async pagEditarPost(req, res) {
        const dados = req.body;
        const parametro = req.params.id;

        await aluno.update({
            Nome: dados.nome,
            Idade: dados.idade,
            Sexo: dados.sexo,
            IDSala: dados.sala
        },
        {
            where: { IDAluno: id }
        });
        res.redirect('/');

        if (req.file) {
            await aluno.update(
                { Foto: req.file.filename },
                { where: { IDAluno: id } }
            );
        }
    }
}