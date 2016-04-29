'use strict';

const app = require('../app-data');

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

const getGymsSuccess = (data) => {
  app.gyms = data.gyms;
  console.log(data);
};

const getClimbsSuccess = (data) => {
  app.gyms = data.gyms;
  console.log(data);
};

const createGymSuccess = (data) => {
  app.gym = data.gym;
  console.log(data);
};

const createClimbSuccess = (data) => {
  app.climb = data.climb;
  console.log(data);
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
  createClimbSuccess,
  createGymSuccess,
  getGymsSuccess,
  getClimbsSuccess
};
