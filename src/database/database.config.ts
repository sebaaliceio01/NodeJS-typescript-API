import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.dbschema, process.env.dbusername, process.env.dbpassword, {
    host: process.env.dbhost,
    dialect: 'mysql'
});

export default sequelize