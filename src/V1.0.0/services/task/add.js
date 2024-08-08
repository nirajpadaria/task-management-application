const httpStatus = require("http-status-codes").StatusCodes;
const { user, projects, task } = require("../../../../database/db");
const { v4: uuidv4 } = require("uuid");
const { updateLocalData } = require("../../utils/helper");

module.exports.manageData = async (options) => {
  try {
    const createObjData = createObject(options);

    const checkProject = projects.find((item) => item.id == createObjData.projectId);

    if (!checkProject) {
      return {
        isSuccess: false,
        message: "Invalid projectId",
        code: httpStatus.BAD_REQUEST,
        data: {},
      };
    }
    
    task.push(createObjData);

    updateLocalData(user, projects, task);

    return {
      isSuccess: true,
      message: "Task created Successfully",
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
    title: options.title,
    description: options.description,
    status: options.status,
    projectId: options.projectId,
    createdAt: new Date(),
  };
};
