const asyncErrorWrapper = require("../utils/error/asyncErrorWrapper");
// const UserModel = require("../models/user");
const userService = require("../services/user.service.js");

const getAllUsers = asyncErrorWrapper(async (req, res, next) => {
  console.log("19929");
  // const allUsers = await UserModel.find();
  const allUsers = await userService.getOne(123);
  // const result = userService.pick(allUsers,['name','ggg']);
  // console.log("result", result);
  res.status(200).json({
    success: true,
      message: "All user successfully listed",
      allUsers,
    });
  });

  const makeAdmin = asyncErrorWrapper(async (req, res, next) => {
    // const editRole = await UserModel.findByIdAndUpdate(req.params.userId, {
    //   role: "admin",
    // });
    // if (!editRole) return next(new CustomError("User not found.", 404));
    res.status(200).json({
      success: true,
    message: "The user's role has been successfully changed to admin.",
    editRole,
  });
});

const makeUser = asyncErrorWrapper(async (req, res, next) => {
  // const editRole = await UserModel.findByIdAndUpdate(req.params.userId, {
  //   role: "user",
  // });
  // if (!editRole) return next(new CustomError("User not found.", 404));
  res.status(200).json({
    success: true,
    message: "The user's role has been successfully changed to user.",
    editRole,
  });
});

module.exports = {
  getAllUsers,
  makeUser,
  makeAdmin,
};
