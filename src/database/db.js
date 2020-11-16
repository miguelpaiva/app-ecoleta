// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose();

//iniciar objeto do banco de dados
const db = new sqlite3.Database("./src/database/database.db");

module.exports = db;

//utilizar o objeto de banco de dados, para nossas operacoes
// db.serialize(() => {
//     //Criar uma tabela com comandos SQL
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT, 
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT 
//         )
//     `);

//     //Inserir dados na tabela
//     const query = `
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items

//         ) VALUES (?,?,?,?,?,?,?)
//     `;

//     const values = [
//         "https://images.unsplash.com/photo-1480359014333-3935abd88252?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
//         "Papersider",
//         "Guilherme Gembala - Jardim América",
//         "N° 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Resíduos Eletrônicos, Lâmpadas"
//     ];

//     function afterInsertData(err) {
//         if(err){
//             return console.log(err);
//         }

//         console.log("Cadastrado com sucesso!");
//         console.log(this);
//     }

//     db.run(query, values, afterInsertData);

//     //Consultar dados na tabela

//     // db.all(`SELECT name FROM places`, function(err, rows){
//     //     if(err){
//     //         return console.log(err);
//     //     }

//     //     console.log("Aqui estão seus registros: ")
//     //     console.log(rows);
//     // })     

//     // //Deletar dados na tabela    
//     // db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
//     //     if(err){
//     //         return console.log(err);
//     //     }
//     //     console.log("Registro deletado com sucesso!");
//     // })

    
// }) 