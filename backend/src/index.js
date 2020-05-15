const express = require('express');
const cors = require('cors')
const routes = require('./routes')

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
/**rota /recurso 
 * 
 */

/**
 *  Método HTTP:
 *  GET:  Busca/ lista uma informação do back-end
 *  POST: Cria uma informçao no back-end
 *  PUT:  Altera uma informação no back-end
 *  DELETE: deleta uma informção no back-end
 * 
 */
/**
 * tipo de parametros :
 * Query Parms :parametro nomeados  enviados na rota apos "?" (filtros, paginção)
 * Route Params:  parametro utilizado para identificar recursos
 * Resquet body: corpo da da requisição,utilizado para criar ou alterar recursos 
 */

 /** tipo de banco de dados
  * SQL :MYSQL, SQLITE, POSTGRESQL, ORACLE, MICROSOFT SQL SERVER
  * NoSQL: mongobd, couchbd, etc
  */
 /**
  * Driver : SELECT * FROM user
  * query biulder: table('user').select('*').wherer()
  */
 
 




app.listen(3333);
