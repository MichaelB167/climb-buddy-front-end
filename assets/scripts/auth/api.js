'use strict';

const app = require('../app-data.js');

const signUp = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/sign-up',
    data
  })
  .done(success)
  .fail(failure);
};

const signIn = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/sign-in',
    data
  })
  .done(success)
  .fail(failure);
};

const signOut = (success, failure) => {
  console.log(app.user.id);
  $.ajax({
    method: 'DELETE',
    url: app.api + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  })
  .done(success)
  .fail(failure);
};

const updatePassword = (success, failure, data) => {
  console.log(data);
  $.ajax({
    method: 'PATCH',
    url: app.api + '/change-password/' + app.user.id,
    data: {
      "passwords": {
        "old": data.passwords.old,
        "new": data.passwords.new
      },
    },
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  })
  .done(success)
  .fail(failure);
};

const getGyms = (success, failure) => {
  $.ajax({
    method: 'GET',
    url: app.api + '/gyms',
    headers:{
      Authorization: 'Token token=' + app.user.token,
    },
  })
  .done(success)
  .fail(failure);
};

const getClimbs = (success, failure) => {
  $.ajax({
    method: 'GET',
    url: app.api + '/climbs',
    headers:{
      Authorization: 'Token token=' + app.user.token,
    },
  })
  .done(success)
  .fail(failure);
};

const createGym = (success, failure, data) => {
  $.ajax({
    method: "POST",
    url: app.api + '/gyms',
    dataType: 'json',
    headers: {
      Authorization: 'Token token='+ app.user.token,
    },
    data,
  })
  .done(success)
  .fail(failure);
};

const createClimb = (success, failure, data) => {
  $.ajax({
    method: "POST",
    url: app.api + '/climbs',
    headers: {
      Authorization: 'Token token='+ app.user.token,
    },
    data,
  })
  .done(success)
  .fail(failure);
};

module.exports = {
  signUp,
  signIn,
  signOut,
  updatePassword,
  getGyms,
  getClimbs,
  createGym,
  createClimb
};
