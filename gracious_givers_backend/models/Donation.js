// Author: Jay Bhagvanbhai Sonani (B00891984)

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donationSchema = new Schema(
    {
        _id: { type: String, required: true },
        donation_event_id: { type: String, required: true },
        donation_event_name: { type: String, required: true },
        donation_amount: { type: Number, required: true },
        donor_firstname: { type: String, required: true },
        donor_lastname: { type: String, required: true },
        donor_email: { type: String, required: true }
    },
    { timestamps: true }
);

module.exports = mongoose.model('donations', donationSchema);