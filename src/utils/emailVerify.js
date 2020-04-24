// Exemplo para validação de email

import Profile  from '../models/Profile';
import User  from '../models/User';
import { Op }  from 'sequelize';

const emailVerify = async (email, userEmail = false) => {

    let email_verif = [];

    if(!userEmail) {
        email_verif = await Profile.findAll({
            where: {
                email: email,
            } 
        });

        
    }else{
        email_verif = await Profile.findAll({
            where: {
                [Op.or]: {
                    email: email,
                    email: userEmail
                }
            } 
        });
    }

    if(email_verif.length > 0) 
        return true;
    else
        return false;
}

export default emailVerify;
