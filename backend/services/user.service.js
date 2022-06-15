const AppError = require("../utils/error/customError");
const { SYSTEM_ERROR } = require("../utils/error/errors");

const getOne = async (id) => {
  if (!id) {
    throw new AppError(SYSTEM_ERROR, 400);
  } else
  await sleep (2000);
  return { name: "Tan", age: 20 };
};

const pick = (object, keys) => {
  return keys.reduce((obj, key) => {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
};
module.exports = {
  getOne,
  pick,
};
