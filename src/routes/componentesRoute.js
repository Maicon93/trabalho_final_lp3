const componentes = require('../controllers/componentesController');

module.exports = (app) => {
  app.post('/cadastrar-componentes-produto/', componentes.cadastrarComponentesProduto)
  app.get('/get-componentes-produto/', componentes.getComponentesProduto)
  //app.patch('/update-cliente/', cliente.updateCliente)
  app.delete('/delete-componentes-produto/:id', componentes.deleteComponentesProduto)
}