var DirectorModel = require("../model/Director");

/**
 * returns all directors
 *
 * @return {Array} - Array of Objects(Director model object)
 */
async function getDirectors() {
  const directors = await DirectorModel.findAll();

  return directors;
}

/**
 * returns specific director by id
 *
 * @param {Number} id
 * @return {Object} empty or Director model object
 */
async function getDirector(id, name, surname) {
  let where = {};
  if (id) {
    where.id = id;
  } else if (name && surname) {
    (where.name = name), (where.surname = surname);
  } else {
    throw new Error("missing parameter");
  }

  const director = await DirectorModel.findOne({
    where: where,
  });

  return director;
}

async function insertDirector(director) {
  const newDirector = await DirectorModel.create(director);

  return newDirector;
}

async function deleteDirector(id) {
  const result = await DirectorModel.destroy({
    where: {
      id: id,
    },
  });

  return result;
}

async function updateDirector(director) {
  var id = director.id;

  if (!id) {
    throw new Error("id is required");
  }

  let existingDirector = await DirectorModel.findByPk(id);

  if (!existingDirector) {
    throw new Error(`director with id:${id} is not found`);
  }

  await DirectorModel.update(director, {
    where: {
      id: id,
    },
  });

  const updatedDirector = await DirectorModel.findOne({ where: { id: id } });

  return updatedDirector;
}

module.exports.getDirectors = getDirectors;
module.exports.getDirector = getDirector;
module.exports.insertDirector = insertDirector;
module.exports.deleteDirector = deleteDirector;
module.exports.updateDirector = updateDirector;
