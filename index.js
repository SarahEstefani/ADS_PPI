import express from 'express';
const express = require('express');
const app = express();
const host = '0.0.0.0'; 
const porta = 4000; 
function gerarPaginaTabuada(requisicao, resposta) {
    try{
     const numero = Number(requisicao.query.tabuada);  
     let respostadamultiplicao = `
        <!DOCTYPE html>	
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Tabuada do ${numero}</title>
            </head>
            <body>
                <h1>Tabuada ${numero}</h1>
                <p> `; 
    for (let i=0; i<=11; i++){
      const linha = `<li>${numero} x ${i} = ${numero*i}</li>`;
      respostadamultiplicao += linha;
    }
      respostadamultiplicação+=`
                </p>
            </body>
        </html>
    `;
    respostadamultiplicao += '</ul>'
    resposta.end(conteudoResposta);
    
    } catch (erro) {
        resposta.end(`
        <!DOCTYPE html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Erro ao processar a potência de um número</title>
            </head>
            <body>
                <h1>Não foi possível processar a sua requisição</h1>
                <h2>Erro ao tentar gerar os resultados</h2>
                <h2>Na barra de endereços digite por exemplo http://localhost:4000/tabuada?tabuada=2</h2>
                <h3>${erro.message}</h3> 
            </body>
        </html>
        `);
    }
}
app.get('/tabuada', gerarPaginaTabuada);

app.listen(porta, host,  () => {
    console.log(`Servidor executando em http://${host}:${porta}.`);
});