'use strict';

const app = require('../app-data');

const getGymsSuccess = (data) => {
  app.gyms = data.gyms;
  console.log(data);
};

const getClimbsSuccess = (climbs) => {
  let showClimbs = require('../templates/show-climbs.handlebars');
  $('.content-display').append(showClimbs({climbs}));
};

const createGymSuccess = (data) => {
  app.gym = data.gym;
  console.log(data);
};

const createClimbSuccess = (data) => {
  app.climb = data.climb;
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  createClimbSuccess,
  createGymSuccess,
  getGymsSuccess,
  getClimbsSuccess,
  failure
};
