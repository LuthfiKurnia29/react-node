import { Sequelize } from "sequelize";

const db = new Sequelize('db_react', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db; 