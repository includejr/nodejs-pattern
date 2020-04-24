// Aqui é um exemplo de um model, basicamente é como você faz o JavaScript entender os dados
// que vem da tabela
import { Model, DataTypes } from 'sequelize';

class Event extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
            topic: DataTypes.STRING,
            description: DataTypes.STRING,
            speakers: DataTypes.STRING,
            location: DataTypes.STRING,
            duration: DataTypes.STRING,
            date: DataTypes.DATE,
            hours_limit: DataTypes.INTEGER,
            link: DataTypes.STRING,
            registers: DataTypes.INTEGER,
            registers_limit: DataTypes.INTEGER,
            register_type: DataTypes.INTEGER,
            status: DataTypes.INTEGER
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.EventCheck, { foreignKey: 'event_id', as: 'checks'});
    }
}

export default Event;