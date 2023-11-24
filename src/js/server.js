const express = require('express'); 
const bodyParser = require('body-parser');
const app = express(); 
const port = 3000; // Escolha a porta que desejar // Configuração do Body Parser para analisar dados do formulário 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // Rota para lidar com o envio do formulário 
app.post('/enviar-contato', (req, res) => { const name = req.body.name; 
const email = req.body.email;
const motivo = req.body.motivo; 
const message = req.body.message; // Aqui, você pode processar os dados como preferir, por exemplo, enviar um e-mail // Exemplo de resposta de confirmação 
res.send('Mensagem enviada com sucesso!'); }); // Inicie o servidor 
app.listen(port, () => { console.log(`Servidor está rodando em http://localhost:${3000}`); });


