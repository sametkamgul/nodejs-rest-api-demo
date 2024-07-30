const { Sequelize } = require("sequelize");
const kerevizlog = require("kerevizlog");
require("dotenv").config();

const kLogger = new kerevizlog();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    dialect: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    logging: false,
  }
);

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
