const express = require("express");
const server = express();

// pegar o banco de dados
const db = require("./database/db");

// configurar pasta publica
server.use(express.static("public"));

// utilizando template engine (nunjukcs)
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
    express: server,
    noCache: true
});

// configurar rotas da aplicacao

// pagina inicial -> req: requisicao, res: resposta
server.get("/", (req, res) => {
    return res.render("index.html", { title: "Seu marketplace de coleta de resíduos." }); // renderiza pags html pelo nunjucks
} );

server.get("/create-point", (req, res) => {
    return res.render("create-point.html"); 
} );

server.get("/search", (req, res) => {

    //pegar os dados do banco de dados
    db.all(`SELECT * FROM places`, function(err, rows){
        if(err){
            return console.log(err);
        }
        console.log(rows);

        const total = rows.length;

        // mostrar a pagina html com os dados do banco de dados
        return res.render("search-results.html", { places: rows, total });     
    }) 
} );

// ligar o servidor
server.listen(3000);