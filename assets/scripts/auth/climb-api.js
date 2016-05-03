'use strict';

const app = require('../app-data.js');

const getGyms = (success, failure) => {
  $.ajax({
    method: 'GET',
    url: app.api + '/gyms',
    dataType: 'json',
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
    dataType: 'json',
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

const updateClimb = (success, failure, data, climb_id) => {
  $.ajax({
    method: "PATCH",
    url: app.api + '/climbs/' + climb_id,
    data,
    headers: {
      Authorization: 'Token token='+ app.user.token,
    },
  })
  .done(success)
  .fail(failure);
};

const deleteClimb = (success, failure, climb_id) => {
  $.ajax({
    url: app.api + '/climbs/' + climb_id,
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  })
  .done(success)
  .fail(failure);
};

module.exports = {
  getGyms,
  getClimbs,
  createGym,
  createClimb,
  updateClimb,
  deleteClimb,
};
