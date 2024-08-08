const httpStatus = require("http-status-codes").StatusCodes;
const { projects } = require("../../../../database/db");

module.exports.manageData = async (options) => {
  try {
    const getDataById = projects.filter(item => item.userId == options)
    if (getDataById) {
      return {
        isSuccess: true,
        message: "Success",
        code: httpStatus.OK,
        data: { projects: getDataById },
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
