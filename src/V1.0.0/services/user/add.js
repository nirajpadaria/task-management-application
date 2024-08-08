const httpStatus = require("http-status-codes").StatusCodes;
const { user, projects, task } = require("../../../../database/db");
const { v4: uuidv4 } = require("uuid");
const { updateLocalData } = require("../../utils/helper");

module.exports.manageData = async (options) => {
  try {
    const createObjData = createObject(options);
    const checkEmail = user.find((item) => item.email == options.email);

    if (checkEmail) {
      return {
        isSuccess: false,
        message: "Email already exists",
        code: httpStatus.BAD_REQUEST,
        data: {},
      };
    }

    user.push(createObjData);

    updateLocalData(user, projects, task);

    return {
      isSuccess: true,
      message: "User created Successfully",
      code: httpStatus.OK,
      data: {},
    };
  } catch (error) {
    return {
      isSuccess: false,
      message: "Something went wrong",
      code: httpStatus.INTERNAL_SERVER_ERROR,
      data: {error},
    };
  }
};

const createObject = (options) => {
  const uniqueId = uuidv4();

  return {
    id: uniqueId,
    name: options.name,
    email: options.email,
  };
};
