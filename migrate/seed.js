const connection = require("../helper/connection");

const DirectorModel = require("../model/Director");

// db connection
connection.init();

// create directors table
async function createDirectorsTable() {
    await DirectorModel.sync();
}

// insert data to directors table
async function insertDataToDirectorsTable() {
    Promise.all([
        DirectorModel.create({
            name: "Quentin",
            surname: "Tarantino",
            gender: "Male",
            age: 32,
            maritalStatus: "Single",
        }),
        DirectorModel.create({
            name: "Ridley",
            surname: "Scott",
            gender: "Male",
            age: 31,
            maritalStatus: "Married",
        }),
        DirectorModel.create({
            name: "Alfred",
            surname: "Hitchcock",
            gender: "Male",
            age: 31,
            maritalStatus: "Single",
        })]
    ).then(() => {
        console.log("data is inserted to database!");
    });
}

// init tables and datas
createDirectorsTable().then(() => {
    insertDataToDirectorsTable();
});
