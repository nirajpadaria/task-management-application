const httpStatus = require("http-status-codes").StatusCodes;
const { user, projects, task } = require("../../../../database/db");
const { v4: uuidv4 } = require("uuid");
const { updateLocalData } = require("../../utils/helper");

module.exports.manageData = async (options) => {
  try {
    const createObjData = createObject(options);

    const checkUser = user.find((item) => item.id == createObjData.userId);

    if (!checkUser) {
      return {
        isSuccess: false,
        message: "Invalid userId",
        code: httpStatus.BAD_REQUEST,
        data: {},
      };
    }

    projects.push(createObjData);

    updateLocalData(user, projects, task);

    return {
      isSuccess: true,
      message: "Project created Successfully",
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

const createObject = (options) => {
  const uniqueId = uuidv4();

  return {
    id: uniqueId,
    name: options.name,
    description: options.description,
    userId: options.userId,
  };
};
