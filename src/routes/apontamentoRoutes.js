const apontamento = require('../controllers/apontamentosController');

module.exports = (app) => {
  app.post('/inserir-apontamento/', apontamento.inserirApontamentos)
  app.get('/get-apontamento/', apontamento.getApontamento)
  app.delete('/delete-apontamento/:id', apontamento.deleteApontamentos)
}