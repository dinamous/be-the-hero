const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


// faz com q a aplicação entenso o request body com json

// rota / recurso


// métodos http
// GET: buscar informação do backend
// POST: Criar informação no backend
// PUT: alterar informação do backend
// DELETE: apagar uma informação do backend

/**
 * TIPOS DE PARAMETROS
 * Query Params: parametros enviados na rota, apos o ? ,(filtro e paginação)
 * Route Params: parametros utilizados para identificar recursos
 * Request body: corpo da requisição,utilizado para criar ou alterar recursos
*/

/**
 * Banco de dados
 * SQL: MySQL,SQLite,PostgreSQL
 * NoSQL: MongoDB,couchDB
 *   
*/


/**
 * Driver: SELECT * FROM USERS
 * Query Builder: table('users').select(*).where()
 */


app.listen(3333);