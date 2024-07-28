const { Sequelize } = require("sequelize");
var kerevizlog = require("kerevizlog");

var kLogger = new kerevizlog();

const sequelize = new Sequelize("director", "sametkamgul", "123", {
    dialect: "postgres",
    host: "localhost",
    port: "5432",
    logging: false,
});

async function init() {
    try {
        await sequelize.authenticate();

        kLogger.info("connected to database");
    } catch (error) {
        kLogger.info("error on connection to database!", error);
    }
}

module.exports.sequelize = sequelize;
module.exports.init = init;
