const { Router } = require('express');
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router();
// METDOS HTTP: GET POST, PUT, DELETE
// Tipo de Params:
//Query Params: request.query(Filtros, ordenação, paginação, ...)
//Route Params: PUT E DELETE request.params(Identificar um recurso na alteração ou deleta) /:_id
//Body: POST OU PUT Criação ou Alteração. Envia os dados da requisição no corpo da aplicação
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
// routes.delete('/devs/:_id', DevController.delete);

routes.get('/search', SearchController.index);

module.exports = routes;
