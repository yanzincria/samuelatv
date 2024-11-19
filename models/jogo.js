const {sequelizeDb, sequelizeConfig} = require('./jogosTabuleiro_db')// estamos utilizando o recurso de desestruturação de objetos para importar apenas os módulos necessários.
const colecao = require('./colecao')// importando a tabela departamento
//CRIANDO TABELA
const jogo = sequelizeConfig.define(
    'jogos',
    {
        nome:{
            type:sequelizeDb.STRING
        },
        genero:{
            type:sequelizeDb.STRING
        },
        num_jogadores:{
            type:sequelizeDb.STRING
        },
        tempo:{
            type:sequelizeDb.TIME
        },
        descricao:{
            type:sequelizeDb.STRING
        }
        
    }
)

//CRIANDO A CHAVE ESTRANGEIRA
// Estou dizendo que departamento possui muitos funcionários
colecao.hasMany(jogo,{
    onDelete:'CASCADE',
    onUpdate: 'CASCADE'
})

jogo.belongsTo(colecao)// Estou dizendo que funcionário pertence a apenas 1 departamento

jogo.sync()
module.exports = jogo