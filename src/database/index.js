// Seu arquivo principal do banco de dados
import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import Event from '../models/Event';

// Iniciando conexão
const connection = new Sequelize(dbConfig);

Event.init(connection);

export default connection;

