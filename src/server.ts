import express from 'express';
import cors from 'cors';
import { mongoConnect } from './config/db';

// Importar as rotas
import clientRouter from './routers/ClientRouter'; // Ajuste o caminho conforme necessário
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Conectar ao banco de dados
mongoConnect().then(() => {
  console.log('Banco de dados conectado');

  // Usar as rotas
  app.use('/api/clients', clientRouter);


  const PORT = process.env.PORT || 1000;

  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
}).catch((error) => {
  console.error('Erro ao conectar ao banco de dados', error);
});
