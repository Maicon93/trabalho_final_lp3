const producao = require('../controllers/producaoController');

module.exports = (app) => {
  app.post('/cadastrar-ordem-producao/', producao.cadastrarOrdem)
  app.get('/get-ordem-producao/', producao.getOrdemProducao)
  app.patch('/update-ordem-producao/', producao.updateOrdemProducao)
  app.delete('/delete-ordem-producao/:id', producao.deleteOrdemProducao)
}