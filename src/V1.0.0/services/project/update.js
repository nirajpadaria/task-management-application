const httpStatus = require("http-status-codes").StatusCodes;
const { projects } = require("../../../../database/db");
const { updateData } = require("../../utils/helper");

module.exports.manageData = async (options) => {
  try {
    const checkUser = user.find((item) => item.id == options.body.userId);

    if (!checkUser) {
      return {
        isSuccess: false,
        message: "Invalid userId",
        code: httpStatus.BAD_REQUEST,
        data: {},
      };
    }
    const checkId = projects.find((item) => item.id == options.id);

    if (!checkId) {
      return {
        isSuccess: false,
        message: "Invalid Id",
        code: httpStatus.BAD_REQUEST,
        data: {},
      };
    }

    const updateUser = updateData("projects", options.id, options.body);
    if (updateUser == null) {
      return {
        isSuccess: false,
        message: "Projects updateing failed",
        code: httpStatus.BAD_REQUEST,
        data: {},
      };
    }

    return {
      isSuccess: true,
      message: "Projects updated Successfully",
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
