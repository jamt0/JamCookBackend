const db = require("..");
import Sequelize from "sequelize";


const Usuario = db.sequelize.define("users", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
}, {
    paranoid: true,
    indexes: [
        {unique: true, fields: ['email']}
    ],
    initialAutoIncrement: 1
});

export default Usuario;