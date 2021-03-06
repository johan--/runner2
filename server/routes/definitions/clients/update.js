'use strict';

var Joi    = require('joi'),
    Client = require('../../../models/client');

module.exports = {
  description: 'Update A Client',
  tags:['clients'],
  validate: {
    payload: {
      id: Joi.number().required(),
      first: Joi.string().required(),
      last: Joi.string().required(),
      ins_id: Joi.number().required().allow(null),
      room: Joi.string().allow(null),
      admit_date: Joi.string().allow(null),
      discharge_date: Joi.string().allow(null),
      phone: Joi.string().allow(null),
      email: Joi.string().allow(null)
    }
  },
  handler: function(request, reply){
    Client.update(request.auth.credentials, request.payload, function(err, results){
      reply().code(err ? 400 : 200);
    });
  }
};
