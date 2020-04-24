// Arquivo principal da aplicação

import express from 'express';
import http from 'http';
import routes from './routes';
import cors from 'cors';

import './database';

const app = express();
const server = http.Server(app);

// app.use(authMiddleware);
app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(8000);

