// Author: Akanksha Singh (B00892887)

var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fundraiserSchema = new Schema({
    _id: { type: String, required: true },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ngoId: {
        type: String,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    imageName: {
        type: String,
        required: true
    },
    goalAmount: {
        type: Number,
        required: true
    },
    amountRaised: Number,
    currency: {
        type: String,
        required: true
    },
    donors: Number,
    cause: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    activeDays : {
        type: Number,
        required: true
    },
    endDate: String,
}, { timestamps: true });

const Fundraiser = mongoose.model('Fundraiser', fundraiserSchema);

module.exports = Fundraiser;




