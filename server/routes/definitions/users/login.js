'use strict';

var Joi  = require('joi'),
  User = require('../../../models/user');

module.exports = {
  description: 'Login a User',
  tags:['users'],
  validate: {
    payload: {
      username: Joi.string().required(),
      password: Joi.string().required()
    }
  },
  cors:{origin: ['http://localhost:8100'], credentials: true},
  auth: false,
  handler: function(request, reply){
    User.login(request.payload, function(err, user){
      if(!user){return reply().code(401);}

      request.auth.session.set(user);
      reply(user);
    });
  }
};
