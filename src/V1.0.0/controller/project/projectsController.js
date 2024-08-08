const {
    addProject,
    listProject,
    getProject,
    updateProject,
    deleteProject,
    getTasks
  } = require("../../services/project");
  const httpStatus = require("http-status-codes").StatusCodes;
  
  module.exports.projectsAdd = async (options) => {
    try {
      return await addProject.manageData(options);
    } catch (error) {
    console.log('error', error);

      return {
        code: httpStatus.INTERNAL_SERVER_ERROR,
        message: "something went wrong",
        additionalInfo: error,
      };
    }
  };
  
  module.exports.projectsList = async (options) => {
    try {
      return await listProject.manageData(options);
    } catch (error) {
      return {
        code: httpStatus.INTERNAL_SERVER_ERROR,
        message: "something went wrong",
        additionalInfo: error,
      };
    }
  };
  
  module.exports.projectsGet = async (options) => {
    try {
      return await getProject.manageData(options);
    } catch (error) {
      return {
        code: httpStatus.INTERNAL_SERVER_ERROR,
        message: "something went wrong",
        additionalInfo: error,
      };
    }
  };

  module.exports.projectsTaskGet = async (options) => {
    try {
      return await getTasks.manageData(options);
    } catch (error) {
      return {
        code: httpStatus.INTERNAL_SERVER_ERROR,
        message: "something went wrong",
        additionalInfo: error,
      };
    }
  };
  
  module.exports.projectsUpdate = async (options) => {
    try {
      return await updateProject.manageData(options);
    } catch (error) {
      return {
        code: httpStatus.INTERNAL_SERVER_ERROR,
        message: "something went wrong",
        additionalInfo: error,
      };
    }
  };
  
  module.exports.projectsDelete = async (options) => {
    try {
      return await deleteProject.manageData(options);
    } catch (error) {
      return {
        code: httpStatus.INTERNAL_SERVER_ERROR,
        message: "something went wrong",
        additionalInfo: error,
      };
    }
  };
  