const bcrypt = require("bcrypt");
require("dotenv").config();

const saltRounds = parseInt(process.env.SALT_ROUNDS);

// db helper function
const connection = require("../helper/connection");

// db models
const DirectorModel = require("../model/Director");
const User = require("../model/User");

// db connection
connection.init();

// create directors table
async function createDirectorsTable() {
  await DirectorModel.sync();
  await User.sync();

  console.log("db tables are synced!");
}

// insert data to directors table
async function insertDataToDirectorsTable() {
  Promise.all([
    DirectorModel.findOne({
      where: { name: "Quentin", surname: "Tarantino" },
    }).then((d) => {
      if (!d) {
        DirectorModel.create({
          name: "Quentin",
          surname: "Tarantino",
          gender: "Male",
          age: 32,
          maritalStatus: "Single",
        });
      }
    }),
    DirectorModel.findOne({
      where: { name: "Ridley", surname: "Scott" },
    }).then((d) => {
      if (!d) {
        DirectorModel.create({
          name: "Ridley",
          surname: "Scott",
          gender: "Male",
          age: 31,
          maritalStatus: "Married",
        });
      }
    }),
    DirectorModel.findOne({
      where: { name: "Alfred", surname: "Hitchcock" },
    }).then((d) => {
      if (!d) {
        DirectorModel.create({
          name: "Alfred",
          surname: "Hitchcock",
          gender: "Male",
          age: 40,
          maritalStatus: "Single",
        });
      }
    }),
    User.findOne({ where: { username: process.env.TEST_USER_EMAIL } }).then(
      (u) => {
        if (!u) {
          User.create({
            username: process.env.TEST_USER_EMAIL,
            password: bcrypt.hashSync(
              process.env.TEST_USER_PASSWORD,
              saltRounds
            ),
          });
        }
      }
    ),
  ]).then(() => {
    console.log("data is inserted to database!");
  });
}

// init tables and datas
createDirectorsTable().then(() => {
  insertDataToDirectorsTable();
});
