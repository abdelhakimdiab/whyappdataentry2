'use strict';

var app = require('../..');
import request from 'supertest';

var newOffer;

describe('Offer API:', function() {

  describe('GET /api/offers', function() {
    var offers;

    beforeEach(function(done) {
      request(app)
        .get('/api/offers')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          offers = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      offers.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/offers', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/offers')
        .send({
          name: 'New Offer',
          info: 'This is the brand new offer!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newOffer = res.body;
          done();
        });
    });

    it('should respond with the newly created offer', function() {
      newOffer.name.should.equal('New Offer');
      newOffer.info.should.equal('This is the brand new offer!!!');
    });

  });

  describe('GET /api/offers/:id', function() {
    var offer;

    beforeEach(function(done) {
      request(app)
        .get('/api/offers/' + newOffer._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          offer = res.body;
          done();
        });
    });

    afterEach(function() {
      offer = {};
    });

    it('should respond with the requested offer', function() {
      offer.name.should.equal('New Offer');
      offer.info.should.equal('This is the brand new offer!!!');
    });

  });

  describe('PUT /api/offers/:id', function() {
    var updatedOffer;

    beforeEach(function(done) {
      request(app)
        .put('/api/offers/' + newOffer._id)
        .send({
          name: 'Updated Offer',
          info: 'This is the updated offer!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedOffer = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedOffer = {};
    });

    it('should respond with the updated offer', function() {
      updatedOffer.name.should.equal('Updated Offer');
      updatedOffer.info.should.equal('This is the updated offer!!!');
    });

  });

  describe('DELETE /api/offers/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/offers/' + newOffer._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when offer does not exist', function(done) {
      request(app)
        .delete('/api/offers/' + newOffer._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
