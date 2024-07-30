const User = require("../model/User");

/**
 * returns user by username
 *
 * @param {Number} id
 * @return {Object} empty or Director model object
 */
async function getUser(username) {
  if (!username) {
    throw new Error("missing parameter: username");
  }

  const user = await User.findOne({
    where: { username: username },
  });

  return user;
}

/**
 * creates a user
 *
 * @param {String} username
 * @param {String} password
 * @return {Object} created user
 */
async function createUser(username, password) {
  if (!username) {
    throw new Error("missing parameter: username");
  }

  const user = await User.create({
    username: username,
    password: password,
  });

  return user;
}

module.exports.getUser = getUser;
module.exports.createUser = createUser;
