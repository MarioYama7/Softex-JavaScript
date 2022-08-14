const {Sequelize} = require('sequelize');

/*aqui faz a ligação com o banco de dados*/

const sequelize = new Sequelize("teste", "root", "", { /*esse teste foi cadastrado no MYSQL, o root é o usuário, não tem senha or isso o ""*/
    host: 'localhost',
    dialect: 'mariadb'
  });

/*criar a mensagem se der certo ou erro*/

sequelize.authenticate()
.then(function(){
    console.log("Conexão de banco de dandos com sucesso")
}).catch(function(){
    console.log("Erro de conexão com banco de dados")
})

  module.exports = sequelize;