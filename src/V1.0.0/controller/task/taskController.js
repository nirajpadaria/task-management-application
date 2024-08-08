const {
    addTask,
    listTask,
    getTask,
    updateTask,
    deleteTask,
  } = require("../../services/task");
  const httpStatus = require("http-status-codes").StatusCodes;
  
  module.exports.taskAdd = async (options) => {
    try {
      return await addTask.manageData(options);
    } catch (error) {
    console.log('error', error);

      return {
        code: httpStatus.INTERNAL_SERVER_ERROR,
        message: "something went wrong",
        additionalInfo: error,
      };
    }
  };
  
  module.exports.taskList = async (options) => {
    try {
      return await listTask.manageData(options);
    } catch (error) {
      return {
        code: httpStatus.INTERNAL_SERVER_ERROR,
        message: "something went wrong",
        additionalInfo: error,
      };
    }
  };
  
  module.exports.taskGet = async (options) => {
    try {
      return await getTask.manageData(options);
    } catch (error) {
      return {
        code: httpStatus.INTERNAL_SERVER_ERROR,
        message: "something went wrong",
        additionalInfo: error,
      };
    }
  };
  
  module.exports.taskUpdate = async (options) => {
    try {
      return await updateTask.manageData(options);
    } catch (error) {
      return {
        code: httpStatus.INTERNAL_SERVER_ERROR,
        message: "something went wrong",
        additionalInfo: error,
      };
    }
  };
  
  module.exports.taskDelete = async (options) => {
    try {
      return await deleteTask.manageData(options);
    } catch (error) {
      return {
        code: httpStatus.INTERNAL_SERVER_ERROR,
        message: "something went wrong",
        additionalInfo: error,
      };
    }
  };
  