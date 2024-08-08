const httpStatus = require("http-status-codes").StatusCodes;
const { user } = require("../../../../database/db");
const { updateData } = require("../../utils/helper");

module.exports.manageData = async (options) => {
  try {
    const checkId = user.find((item) => item.id == options.id);

    if (!checkId) {
      return {
        isSuccess: false,
        message: "Invalid Id",
        code: httpStatus.BAD_REQUEST,
        data: {},
      };
    }

    const checkEmail = user.find(
      (item) => item.email == options.body.email && item.id != options.id
    );

    if (checkEmail) {
      return {
        isSuccess: false,
        message: "Email already exists",
        code: httpStatus.BAD_REQUEST,
        data: {},
      };
    }

    const updateUser = updateData("user", options.id, options.body);
    if (updateUser == null) {
      return {
        isSuccess: false,
        message: "User updateing failed",
        code: httpStatus.BAD_REQUEST,
        data: {},
      };
    }

    return {
      isSuccess: true,
      message: "User updated Successfully",
      code: httpStatus.OK,
      data: {},
    };
  } catch (error) {
    return {
      isSuccess: false,
      message: "Something went wrong",
      code: httpStatus.INTERNAL_SERVER_ERROR,
      data: { error },
    };
  }
};

