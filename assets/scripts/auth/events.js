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
  $('#viewAllClimbs').on('click', function (event) {
      //get data, prevents default
      event.preventDefault();
      authClimbApi.getClimbs(authClimbUi.getClimbsSuccess, authUi.failure);
  });
  $('#updateClimbModal').on('submit', function (event) {
      event.preventDefault();
      let id = $(".update-climb-btn").attr("data-climb-id");
      let data = getFormFields(event.target);
      //get data, prevents default
      authClimbApi.updateClimb(authClimbUi.updateClimbSuccess, authUi.failure, data, id);
      authClimbApi.getClimbs(authClimbUi.getClimbsSuccess, authUi.failure);
  });

  // add climb id to update submit button

  $('.content-display').on('click', '.update-climb', function(event){
      event.preventDefault();
      let id = $(event.target).attr("data-climb-id");
      $(".update-climb-btn").attr("data-climb-id", id);
  });

  // delete climb button handler

  $('.delete-climb-btn').on('click', function (event) {
      //get data, prevents default
      event.preventDefault();
      let id = $(this).attr("data-climb-id");
      $.when(authClimbApi.deleteClimb(authClimbUi.deleteClimbSuccess, authUi.failure, id)).then(function() {
        authClimbApi.getClimbs(authClimbUi.getClimbsSuccess, authUi.failure);});
  });

  //add climb id to delete button

  $('.content-display').on('click', '.delete-climb', function(event){
      event.preventDefault();
      let id = $(event.target).attr("data-climb-id");
      $(".delete-climb-btn").attr("data-climb-id", id);
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
  $('#delete-climb-btn').submit(function() {
      $('#deleteClimbModal').modal('hide');
  });

  //hides training suggestions on page load

  $(document).ready(function(){
    $("#jug, #crimp, #sloper, #pinch, #pocket, #undercling, #sidepull, #gaston").hide();
});

};

module.exports = {
  addHandlers
};
