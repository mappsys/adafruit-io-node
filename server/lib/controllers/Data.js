'use strict';

// generated by: https://github.com/adafruit/io-swagger-templates
// using the Adafruit IO Swagger docs: https://io.adafruit.com/api/docs/api.json
const util = require('util'),
      xml = require('xml'),
      model = require('../models/Data');

module.exports.feedsFeedIdDataGet = function feedsFeedIdDataGet(req, res, next) {

  const feedId = req.swagger.params['feed_id'].value;

  model.feedsFeedIdDataGet(feedId)
    .then(function(data) {
      res.format({
        'application/json': function() {
          res.json(data);
        },
        'text/csv': function() {
          res.csv(data);
        },
        'application/xml': function() {
          res.set('Content-Type', 'text/xml');
          res.send(xml(data));
        },
        'text/html': function() {
          res.set('Content-Type', 'application/json');
          res.json(data);
        },
        'default': function() {
          res.set('Content-Type', 'application/json');
          res.json(data);
        }
      });
    }).
    catch(function(err) {
      res.format({
        'application/json': function() {
          res.status(500).json({ error: err });
        },
        'text/csv': function() {
          res.status(500).csv(err);
        },
        'application/xml': function() {
          res.set('Content-Type', 'text/xml');
          res.status(500).send(xml({ error: err }));
        },
        'text/html': function() {
          res.set('Content-Type', 'application/json');
          res.status(500).json({ error: err });
        },
        'default': function() {
          res.set('Content-Type', 'application/json');
          res.status(500).json({ error: err });
        }
      });
    });

};


module.exports.getDataById = function getDataById(req, res, next) {

  const feedId = req.swagger.params['feed_id'].value,
      dataId = req.swagger.params['data_id'].value;

  model.getDataById(feedId, dataId)
    .then(function(data) {
      res.format({
        'application/json': function() {
          res.json(data);
        },
        'text/csv': function() {
          res.csv(data);
        },
        'application/xml': function() {
          res.set('Content-Type', 'text/xml');
          res.send(xml(data));
        },
        'text/html': function() {
          res.set('Content-Type', 'application/json');
          res.json(data);
        },
        'default': function() {
          res.set('Content-Type', 'application/json');
          res.json(data);
        }
      });
    }).
    catch(function(err) {
      res.format({
        'application/json': function() {
          res.status(500).json({ error: err });
        },
        'text/csv': function() {
          res.status(500).csv(err);
        },
        'application/xml': function() {
          res.set('Content-Type', 'text/xml');
          res.status(500).send(xml({ error: err }));
        },
        'text/html': function() {
          res.set('Content-Type', 'application/json');
          res.status(500).json({ error: err });
        },
        'default': function() {
          res.set('Content-Type', 'application/json');
          res.status(500).json({ error: err });
        }
      });
    });

};

