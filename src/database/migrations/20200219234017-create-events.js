'use strict';
// Aqui fica um arquivo de migration, que nada mais é do que um 
// controle de versão de banco de dados
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('events', { 
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false
            },
            topic: {
                type: Sequelize.STRING,
                allowNull: false
            },
            description: {
                type: Sequelize.STRING(4000),
                allowNull: false
            },
            speakers: {
                type: Sequelize.STRING,
                allowNull: false
            },
            location: {
                type: Sequelize.STRING,
                allowNull: false
            },
            duration: {
                type: Sequelize.STRING,
                allowNull: false
            },
            date: {
                type: Sequelize.DATE,
                allowNull: false
            },
            hours_limit: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            link: {
                type: Sequelize.STRING,
                allowNull: true
            },
            registers: {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            registers_limit: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            register_type: {
                type: Sequelize.INTEGER(1),
                allowNull: false
            },
            status: {
                type: Sequelize.INTEGER(1),
                allowNull: false
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('events');
    }
};

