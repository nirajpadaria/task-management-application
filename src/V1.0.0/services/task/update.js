const httpStatus = require("http-status-codes").StatusCodes;
const { task } = require("../../../../database/db");
const { updateData } = require("../../utils/helper");

module.exports.manageData = async (options) => {
  try {
    const checkId = task.find((item) => item.id == options.id);

    if (!checkId) {
      return {
        isSuccess: false,
        message: "Invalid Id",
        code: httpStatus.BAD_REQUEST,
        data: {},
      };
    }

    const checkProject = projects.find((item) => item.id == options.body.projectId);

    if (!checkProject) {
      return {
        isSuccess: false,
        message: "Invalid projectId",
        code: httpStatus.BAD_REQUEST,
        data: {},
      };
    }

    const updateUser = updateData("task", options.id, options.body);
    if (updateUser == null) {
      return {
        isSuccess: false,
        message: "Task updateing failed",
        code: httpStatus.BAD_REQUEST,
        data: {},
      };
    }

    return {
      isSuccess: true,
      message: "Task updated Successfully",
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
