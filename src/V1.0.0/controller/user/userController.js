const {
  addUser,
  listUser,
  getUser,
  updateUser,
  deleteUser,
  getUserProjects
} = require("../../services/user");
const httpStatus = require("http-status-codes").StatusCodes;

module.exports.userAdd = async (options) => {
  try {
    return await addUser.manageData(options);
  } catch (error) {
    return {
      code: httpStatus.INTERNAL_SERVER_ERROR,
      message: "something went wrong",
      additionalInfo: error,
    };
  }
};

module.exports.userList = async (options) => {
  try {
    return await listUser.manageData(options);
  } catch (error) {
    return {
      code: httpStatus.INTERNAL_SERVER_ERROR,
      message: "something went wrong",
      additionalInfo: error,
    };
  }
};

module.exports.userGet = async (options) => {
  try {
    return await getUser.manageData(options);
  } catch (error) {
    return {
      code: httpStatus.INTERNAL_SERVER_ERROR,
      message: "something went wrong",
      additionalInfo: error,
    };
  }
};

module.exports.userProjectsGet = async (options) => {
    try {
      return await getUserProjects.manageData(options);
    } catch (error) {
      return {
        code: httpStatus.INTERNAL_SERVER_ERROR,
        message: "something went wrong",
        additionalInfo: error,
      };
    }
  };

module.exports.userUpdate = async (options) => {
  try {
    return await updateUser.manageData(options);
  } catch (error) {
    return {
      code: httpStatus.INTERNAL_SERVER_ERROR,
      message: "something went wrong",
      additionalInfo: error,
    };
  }
};

module.exports.userDelete = async (options) => {
  try {
    return await deleteUser.manageData(options);
  } catch (error) {
    return {
      code: httpStatus.INTERNAL_SERVER_ERROR,
      message: "something went wrong",
      additionalInfo: error,
    };
  }
};
