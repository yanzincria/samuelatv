const sequelizeDb = require("sequelize")
const sequelizeConfig = new sequelizeDb(
    'jogosTabuleiro',//O nome do banco de dados
    'root',// informando o nome de usuário do banco
    '', // informando asenha do banco
    {
        dialect:'sqlite', 
        storage:'./jogosTabuleiro.sqlite'// nome do arquivo onde será salvo o nosso banco
    }
)

module.exports = {sequelizeDb, sequelizeConfig}