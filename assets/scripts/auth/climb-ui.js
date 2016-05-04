'use strict';

const app = require('../app-data');
const authClimbApi = require('./climb-api');

const getGymsSuccess = (data) => {
  app.gyms = data.gyms;
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const getClimbsSuccess = (climbs) => {
  let showClimbs = require('../templates/show-climbs.handlebars');
  $('.content-display').html(showClimbs({climbs}));
  //$('#training-display').text(JSON.stringify(climbs));
  //$('#training-display').text(JSON.stringify(climbs.climbs.hold_type_of_fall));
};

const createGymSuccess = (data) => {
  app.gym = data.gym;
  console.log(data);
};

const createClimbSuccess = (data) => {
  app.climb = data.climb;
  console.log(data);
};

const updateClimbSuccess = (data) => {
  console.log(data);
  console.log('updated climb');
  authClimbApi.getClimbs(getClimbsSuccess, failure);
};

const deleteClimbSuccess = () => {
  app.climb = null;
  console.log('successfully deleted climb');
  authClimbApi.getClimbs(getClimbsSuccess, failure);
};

module.exports = {
  createClimbSuccess,
  createGymSuccess,
  getGymsSuccess,
  getClimbsSuccess,
  updateClimbSuccess,
  deleteClimbSuccess,
  failure,
};
