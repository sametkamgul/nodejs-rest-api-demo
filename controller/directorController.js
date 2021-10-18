var DirectorModel = require("../model/Director");

/**
 * returns all directors
 *
 * @return {Array} - Array of Objects(Director model object)
 */
async function getDirectors() {
    var response = {
        status: 404,
        text: {
            message: "The item does not exist",
        },
    };

    const directors = await DirectorModel.findAll();

    if (directors.length > 0) {
        response.status = 200;
    }

    return { directors, response };
}

/**
 * returns specific director by id
 *
 * @param {Number} id
 * @return {Object} empty or Director model object
 */
async function getDirector(id) {
    var response = {
        status: 404,
        text: {
            message: "The item does not exist",
        },
    };

    const director = await DirectorModel.findOne({
        where: {
            id: id,
        },
    });

    if (director != null) {
        response.status = 200;

        return { response, director };
    }

    return { response };
}

async function insertDirector(director) {
    var response = {
        status: 400,
        text: {
            message: "Validation errors in your request",
        },
    };

    var result = await DirectorModel.findOne({
        where: {
            name: director.name,
            surname: director.surname,
            gender: director.gender,
            age: director.age,
            maritalStatus: director.maritalStatus,
        },
    });

    if (!result) {
        result = await DirectorModel.create(director);

        response.status = 201;
        response.text = {
            message: "The item was created successfully",
        };
    }

    return response;
}

async function deleteDirector(id) {
    var response = {
        status: 404,
        text: {
            message: "The item does not exist",
        },
    };

    var result = await DirectorModel.findByPk(id);

    if (result) {
        result = await DirectorModel.destroy({
            where: {
                id: id,
            },
        });

        response.status = 204;
        response.text.message = "The item is deleted";
    }

    return response;
}

async function updateDirector(director) {
    var response = {
        status: 404,
        text: {
            message: "The item does not exist",
        },
    };

    if (director.id) {
        var id = director.id;

        var result = await DirectorModel.findByPk(id);

        if (result) {
            await DirectorModel.update(director, {
                where: {
                    id: id,
                },
            });

            response.status = 200;
            response.director = director;

            return { response, director };
        }
    } else {
        response.status = 400;
        response.text.message = "Validation errors in your request";
        response.text.error = {
            message: "id should be specified",
            field: "id",
        };

        return { response };
    }
}

module.exports.getDirectors = getDirectors;
module.exports.getDirector = getDirector;
module.exports.insertDirector = insertDirector;
module.exports.deleteDirector = deleteDirector;
module.exports.updateDirector = updateDirector;
