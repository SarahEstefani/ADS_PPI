import express from 'express';
const app = express();
const host = '0.0.0.0'; 
const porta = 2000; 
function gerarPaginaTabuada(requisicao, resposta) {
    try{
     const numero = Number(requisicao.query.numero);  
     var respostadamultiplicao = `
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
      respostadamultiplicacao+=`
                </p>
            </body>
        </html>
    `;
    respostadamultiplicao += '</ul>'
    resposta.end(respostadamultiplicacao);
    
    } catch (erro) {
        resposta.end(`
        <!DOCTYPE html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Erro ao processar a potência de um número</title>
            </head>
            <body>
                <h2>Erro ao acessar a TABUADA</h2>
                <h2>Para garantir seu acesso digite: http://localhost:2000/tabuada?numero=2</h2>
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
