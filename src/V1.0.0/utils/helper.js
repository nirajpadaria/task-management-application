const fs = require("fs");
const path = require("path");
const { user, projects, task } = require("../../../database/db");

const updateLocalData = (user, projects, task) => {
  const updatedData = `
    user = ${JSON.stringify(user)}
    
    projects = ${JSON.stringify(projects)};
    
    task = ${JSON.stringify(task)};
    
    module.exports = { user, projects, task };
    `;

  fs.writeFileSync(path.join("./database/db.js"), updatedData);
};

function getListData(type) {
    const data = { user, projects, task };
    return data[type];
  }

function getData(type, id) {
  const data = { user, projects, task };
  return data[type].find((item) => item.id === id);
}

function updateData(type, id, newData) {
  const data = { user, projects, task };
  const index = data[type].findIndex((item) => item.id === id);
  console.log('index',index);
  if (index !== -1) {
    data[type][index] = { ...data[type][index], ...newData };
    updateLocalData(user, projects, task);
    return data[type][index];
  } else {
    return null;
  }
}

function deleteData(type, id) {
  const data = { user, projects, task };
  const index = data[type].findIndex((item) => item.id === id);
  if (index !== -1) {
    data[type].splice(index, 1);
    updateLocalData(user, projects, task);
    return true;
  } else {
    return false;
  }
}

module.exports = { updateLocalData, getData, updateData, deleteData, getListData };
