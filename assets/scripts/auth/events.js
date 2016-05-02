'use strict';

const getFormFields = require('../../../lib/get-form-fields.js');

const authApi = require('./api');
const authClimbApi = require('./climb-api');
const authUi = require('./ui');
const authClimbUi = require('./climb-ui');

const addHandlers = () => {

  //user events

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

  //gym and climb events

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
  $('#updateClimbModal').on('submit', function (event) {
      event.preventDefault();
      let id = $(".update-climb-btn").attr("data-climb-id");
      let data = getFormFields(event.target);
      //get data, prevents default
      authClimbApi.updateClimb(authClimbUi.updateClimbSuccess, authUi.failure, data, id);
  });

  // add climb id to update submit button

  $('.content-display').on('click', '.update-climb', function(event){
      event.preventDefault();
      let id = $(event.target).attr("data-climb-id");
      $(".update-climb-btn").attr("data-climb-id", id);
  });

  $('#deleteClimbBtn').on('click', function (event) {
      //get data, prevents default
      console.log('something happened');
      event.preventDefault();
      authClimbApi.deleteClimb(authClimbUi.deleteClimbSuccess, authUi.failure);
  });

  //hide modals after submits

  $('#signUpForm').submit(function() {
      $('#signUpModal').modal('hide');
  });
  $('#signInForm').submit(function() {
      $('#signInModal').modal('hide');
  });
  $('#changePasswordForm').submit(function() {
      $('#changePasswordModal').modal('hide');
  });
  $('#addGymForm').submit(function() {
      $('#addGymModal').modal('hide');
  });
  $('#addClimbForm').submit(function() {
      $('#addClimbModal').modal('hide');
  });
  $('#updateClimbForm').submit(function() {
      $('#updateClimbModal').modal('hide');
  });

};

module.exports = {
  addHandlers
};
