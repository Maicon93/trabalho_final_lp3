const apontamento = require('../controllers/apontamentosController');

module.exports = (app) => {
  app.post('/inserir-apontamento/', apontamento.deleteApontamento)
  


  app.get('/get-apontamento/', apontamento.deleteApontamento)



  app.delete('/delete-apontamento/:id', apontamento.deleteApontamento)
}