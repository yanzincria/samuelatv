const jogosTabuleiro_db = require('./jogosTabuleiro_db')// Importando o banco de dados


//CRIANDO A TABELA
const colecao = jogosTabuleiro_db.sequelizeConfig.define(
    'colecao',// o nome da tabela
    {
        nome:{
            type:jogosTabuleiro_db.sequelizeDb.STRING
        },
        descricao:{
            type:jogosTabuleiro_db.sequelizeDb.TEXT
        },
        categoria:{
            type:jogosTabuleiro_db.sequelizeDb.STRING
        }
    }
)
/*
Não iremos criar os campos 'id_funcionário' e a chave estrangeira, pois o sequelize irá criar esses campos automaticamente, ou seja, tanto a chave primária quanto chave estrangeira são criados pelo sequelize
*/



colecao.sync()
module.exports = colecao