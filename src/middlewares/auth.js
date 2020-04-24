// Middleware para verificar se o usuário está com o token JWT - JSON WEB TOKEN

import jwt from 'jsonwebtoken';
import authConfig from '../config/auth.json';

export default (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader) 
        return res.status(401).json({ error: 'No token provided !' });
        
    const parts = authHeader.split(' ');

    if(!parts.lenght === 2)
        return res.status(401).json({ error: 'Invalid token !' });

    const [ scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme))
        return res.status(401).json({ error: 'Token bad formated !' });

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err)
            return res.status(401).json({ error: 'Token Invalid !' });

        req.userId = decoded.id;
        return next();
    })

};