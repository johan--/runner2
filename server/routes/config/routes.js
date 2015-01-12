'use strict';

module.exports = [
  {method: 'get',    path: '/{param*}',              config: require('../definitions/general/static')},
  {method: 'post',   path: '/register',              config: require('../definitions/users/register')},
  {method: 'post',   path: '/login',                 config: require('../definitions/users/login')},
  {method: 'delete', path: '/logout',                config: require('../definitions/users/logout')},
  {method: 'get',    path: '/days',                  config: require('../definitions/days/all')},
  {method: 'post',   path: '/days',                  config: require('../definitions/days/create')},
  {method: 'put',    path: '/days',                  config: require('../definitions/days/update')},
  {method: 'get',    path: '/disciplines',           config: require('../definitions/disciplines/all')},
  {method: 'post',   path: '/disciplines',           config: require('../definitions/disciplines/create')},
  {method: 'put',    path: '/disciplines',           config: require('../definitions/disciplines/update')},
  {method: 'get',    path: '/insurances',            config: require('../definitions/insurances/all')},
  {method: 'post',   path: '/insurances',            config: require('../definitions/insurances/create')},
  {method: 'put',    path: '/insurances',            config: require('../definitions/insurances/update')},
  {method: 'get',    path: '/precautions',           config: require('../definitions/precautions/all')},
  {method: 'post',   path: '/precautions',           config: require('../definitions/precautions/create')},
  {method: 'put',    path: '/precautions',           config: require('../definitions/precautions/update')},
  {method: 'get',    path: '/therapists',            config: require('../definitions/therapists/all')},
  {method: 'get',    path: '/therapists/{id}',       config: require('../definitions/therapists/getOne')},
  {method: 'post',   path: '/therapists',            config: require('../definitions/therapists/create')},
  {method: 'post',   path: '/therapists/{id}/photo', config: require('../definitions/therapists/photo-mobile')},
  {method: 'put',    path: '/therapists',            config: require('../definitions/therapists/update')},
  {method: 'get',    path: '/clients',               config: require('../definitions/clients/all')},
  {method: 'get',    path: '/clients/{id}',          config: require('../definitions/clients/getOne')},
  {method: 'post',   path: '/clients',               config: require('../definitions/clients/create')},
  {method: 'post',   path: '/clients/{id}/photo',    config: require('../definitions/clients/photo-mobile')},
  {method: 'put',    path: '/clients',               config: require('../definitions/clients/update')},
  {method: 'get',    path: '/txplans',               config: require('../definitions/txplans/all')},
  {method: 'post',   path: '/txplans',               config: require('../definitions/txplans/create')},
  {method: 'put',    path: '/txplans',               config: require('../definitions/txplans/update')},
  {method: 'get',    path: '/treatments',            config: require('../definitions/treatments/all')},
  {method: 'post',   path: '/treatments',            config: require('../definitions/treatments/create')},
  {method: 'put',    path: '/treatments',            config: require('../definitions/treatments/update')},
  {method: 'delete', path: '/treatments/{id}',       config: require('../definitions/treatments/nuke')},
  {method: 'get',    path: '/workscheds',            config: require('../definitions/workscheds/all')},
  {method: 'post',   path: '/workscheds',            config: require('../definitions/workscheds/create')},
  {method: 'put',    path: '/workscheds',            config: require('../definitions/workscheds/update')},
  {method: 'delete', path: '/workscheds/{id}',       config: require('../definitions/workscheds/nuke')},
  {method: 'get',    path: '/status',                config: require('../definitions/users/status')}
];
