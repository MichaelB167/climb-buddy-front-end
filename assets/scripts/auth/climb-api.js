'use strict';

const app = require('../app-data.js');

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
    dataType: 'json',
    headers: {
      Authorization: 'Token token='+ app.user.token,
    },
    data,
  })
  .done(success)
  .fail(failure);
};

module.exports = {
  getGyms,
  getClimbs,
  createGym,
  createClimb
};
