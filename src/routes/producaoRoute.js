const producao = require('../controllers/producaoController');


module.exports = (app) => {
  app.post('/teste/', producao.teste
    /*#swagger.tags = ['aluno']
    #swagger.summary = 'Cadastro de alunos'
    #swagger.description = 'Teste de descricao'
    */
  )
}