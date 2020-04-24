// Arquivo de geração de token JWT - JSON WEB TOKEN 

import jwt from 'jsonwebtoken';
import authConfig from '../config/auth.json';

const generateToken = (params = {}) => {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    });
};

export default generateToken;