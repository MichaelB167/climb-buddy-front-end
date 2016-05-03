'use strict';

const app = require('../app-data');
const climbApi = require('./climb-api');
const climbUi = require('./climb-ui');

const signUpSuccess = (data) => {
  app.user = data.user;
  console.log(data);
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(data);
};

const signOutSuccess = () => {
  app.user = null;
  console.log('successfully signed out');
};

const updatePasswordSuccess = () => {
  console.log('changed password');
};

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signUpSuccess,
  signOutSuccess,
  updatePasswordSuccess,
};
