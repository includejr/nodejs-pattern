// As configuações do seu banco de dados

module.exports = {
    dialect: mysql,
    host: 3306,
    username: root,
    password: '',
    database: your_db,
    define: {
        timestamps: true,
        underscored: true,
    },
};