const httpStatus = require("http-status-codes").StatusCodes;
const { deleteData } = require("../../utils/helper");

module.exports.manageData = async (options) => {
  try {
    const deleteDataById = deleteData("projects", options);
    if (deleteDataById) {
      return {
        isSuccess: true,
        message: "Project deleted successfully",
        code: httpStatus.OK,
        data: {},
      };
    }
    return {
      isSuccess: false,
      message: "Invalid Id",
      code: httpStatus.BAD_REQUEST,
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
