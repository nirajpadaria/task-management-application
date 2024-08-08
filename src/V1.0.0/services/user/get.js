const httpStatus = require("http-status-codes").StatusCodes;
const { getData } = require("../../utils/helper");

module.exports.manageData = async (options) => {
  try {
    const getDataById = getData('user', options);
    if (getDataById) {
      return {
        isSuccess: true,
        message: "Success",
        code: httpStatus.OK,
        data: { user: getDataById },
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
