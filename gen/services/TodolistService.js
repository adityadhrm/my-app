/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get All Todolist
* Get All Active Todolist
*
* includeUnderscoredone Boolean Include Done Todolist in the Result (optional)
* name String Filter Todolist by Name (optional)
* returns List
* */
const todolistGET = ({ includeUnderscoredone, name }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        includeUnderscoredone,
        name,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Create Todolist
* Create new Todolist to Database
*
* createOrUpdateTodolist CreateOrUpdateTodolist 
* returns Todolist
* */
const todolistPOST = ({ createOrUpdateTodolist }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        createOrUpdateTodolist,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete Todolist
* Delete Existing Todolist in Database
*
* todolistId String Todolist Id for Updated
* no response value expected for this operation
* */
const todolistTodolistIdDELETE = ({ todolistId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        todolistId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Update Todolist
* Update Existing Todolist in Database
*
* todolistId String Todolist Id for Updated
* createOrUpdateTodolist CreateOrUpdateTodolist 
* returns Todolist
* */
const todolistTodolistIdPUT = ({ todolistId, createOrUpdateTodolist }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        todolistId,
        createOrUpdateTodolist,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  todolistGET,
  todolistPOST,
  todolistTodolistIdDELETE,
  todolistTodolistIdPUT,
};
