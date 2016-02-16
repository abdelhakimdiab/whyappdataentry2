'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var offerCtrlStub = {
  index: 'offerCtrl.index',
  show: 'offerCtrl.show',
  create: 'offerCtrl.create',
  update: 'offerCtrl.update',
  destroy: 'offerCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var offerIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './offer.controller': offerCtrlStub
});

describe('Offer API Router:', function() {

  it('should return an express router instance', function() {
    offerIndex.should.equal(routerStub);
  });

  describe('GET /api/offers', function() {

    it('should route to offer.controller.index', function() {
      routerStub.get
        .withArgs('/', 'offerCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/offers/:id', function() {

    it('should route to offer.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'offerCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/offers', function() {

    it('should route to offer.controller.create', function() {
      routerStub.post
        .withArgs('/', 'offerCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/offers/:id', function() {

    it('should route to offer.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'offerCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/offers/:id', function() {

    it('should route to offer.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'offerCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/offers/:id', function() {

    it('should route to offer.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'offerCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
