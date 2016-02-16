'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var OfferSchema = new mongoose.Schema({
    creationDate: {type: Date, default: Date.now},
    offerSource: String,
    offerText: String,
    from: Date,
    to: Date,
    oldPrice: Number,
    newPrice: Number,
    terms: String,
    location: String
});

export default mongoose.model('Offer', OfferSchema);