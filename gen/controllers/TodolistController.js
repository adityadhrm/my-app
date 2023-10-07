/**
 * The TodolistController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/TodolistService');
const todolistGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.todolistGET);
};

const todolistPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.todolistPOST);
};

const todolistTodolistIdDELETE = async (request, response) => {
  await Controller.handleRequest(request, response, service.todolistTodolistIdDELETE);
};

const todolistTodolistIdPUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.todolistTodolistIdPUT);
};


module.exports = {
  todolistGET,
  todolistPOST,
  todolistTodolistIdDELETE,
  todolistTodolistIdPUT,
};
