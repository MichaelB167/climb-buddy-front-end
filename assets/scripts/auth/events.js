'use strict';

const getFormFields = require('../../../lib/get-form-fields.js');

const authApi = require('./api');
const authClimbApi = require('./climb-api');
const authUi = require('./ui');
const authClimbUi = require('./climb-ui');

const addHandlers = () => {
  $('#signUpModal').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(event.target);
    //get data, prevents default
    authApi.signUp(authUi.signUpSuccess, authUi.failure, data);
  });
  $('#signInModal').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(event.target);
    //get data, prevents default
    authApi.signIn(authUi.signInSuccess, authUi.failure, data);
  });
  $('#signOutBtn').on('click', function (event) {
      //get data, prevents default
    event.preventDefault();
    authApi.signOut(authUi.signOutSuccess, authUi.failure);
  });
  $('#changePasswordModal').on('submit', function(event) {
      let data = getFormFields(event.target);
      event.preventDefault();
      authApi.updatePassword(authUi.updatePasswordSuccess, authUi.failure, data);
  });
  $('#addGymModal').on('submit', function (event) {
      event.preventDefault();
      let data = getFormFields(event.target);
      //get data, prevents default
      authClimbApi.createGym(authClimbUi.createGymSuccess, authUi.failure, data);
  });
  $('#addClimbModal').on('submit', function (event) {
      event.preventDefault();
      let data = getFormFields(event.target);
      //get data, prevents default
      authClimbApi.createClimb(authClimbUi.createClimbSuccess, authUi.failure, data);
  });
};



module.exports = {
  addHandlers
};
