const httpStatus = require("http-status-codes").StatusCodes;
const { getListData } = require("../../utils/helper");

module.exports.manageData = async (options) => {
  try {
    const getData = getListData('user');
    return {
      isSuccess: true,
      message: "Success",
      code: httpStatus.OK,
      data: { user: getData },
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
