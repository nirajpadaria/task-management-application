const httpStatus = require("http-status-codes").StatusCodes;
const { task } = require("../../../../database/db");

module.exports.manageData = async (options) => {
  try {
    const getDataById = task.filter(item => item.projectId == options)
    if (getDataById) {
      return {
        isSuccess: true,
        message: "Success",
        code: httpStatus.OK,
        data: { tasks: getDataById },
      };
    }
    return {
      isSuccess: false,
      message: "Invalid Id",
      code: httpStatus.BAD_REQUEST,
      data: {},
    };
  } catch (error) {
    console.log('error', error);
    return {
      isSuccess: false,
      message: "Something went wrong",
      code: httpStatus.INTERNAL_SERVER_ERROR,
      data: { error },
    };
  }
};
