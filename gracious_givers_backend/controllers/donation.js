// Author: Jay Bhagvanbhai Sonani (B00891984)

const Donation = require('../models/Donation')
const Fundraiser = require('../models/Fundraiser')
const { v4: uuidv4 } = require('uuid')

exports.addDonation = async (request, response, next) => {

    const newDonation = new Donation({
        _id: uuidv4(),
        donation_event_id: request.body.donation_event_id,
        donation_event_name: request.body.donation_event_name,
        donation_amount: request.body.donation_amount,
        donor_firstname: request.body.donor_firstname,
        donor_lastname: request.body.donor_lastname,
        donor_email: request.body.donor_email
    })

    try {
        await newDonation.save();

        const temp = await Fundraiser.findOne({ _id: request.body.donation_event_id });
        temp.amountRaised = parseInt(temp.amountRaised) + parseInt(request.body.donation_amount);
        temp.donors += 1;
        temp.save();

        const successResponse = {
            message: 'Donation added successfully',
            success: true,
        }
        response.status(201).json(successResponse);
    } catch (err) {
        const errorResponse = {
            message: err,
            success: false,
        }
        response.status(500).json(errorResponse);
    }
}


exports.allDonations = async (request, response, next) => {

    try {
        const allDonations = await Donation.find();

        const successResponse = {
            message: 'Donation retrieved successfully',
            success: true,
            donations: allDonations,
        }
        response.status(200).json(successResponse);
    } catch (err) {
        const errorResponse = {
            message: err,
            success: false,
        }
        response.status(500).json(errorResponse);
    }
}

exports.allDonationsOfAnEvent = async (request, response, next) => {

    try {
        const event_id = request.params.id;
        const allDonations = await Donation.find({ donation_event_id: event_id });

        const successResponse = {
            message: 'All donations of event with id:' + event_id + ' retrieved successfully',
            success: true,
            donations: allDonations,
        }
        response.status(200).json(successResponse);
    } catch (err) {
        const errorResponse = {
            message: err,
            success: false,
        }
        response.status(500).json(errorResponse);
    }


}


exports.topDonors = async (request, response, next) => {
    try {
        const event_id = request.params.id;
        const topDonations = await Donation.find({ donation_event_id: event_id }).sort({ donation_amount: -1 });

        const successResponse = {
            message: 'Top donors retrieved successfully',
            success: true,
            donations: topDonations.slice(0, 3),
        }
        response.status(200).json(successResponse);
    } catch (err) {
        const errorResponse = {
            message: err,
            success: false,
        }
        response.status(500).json(errorResponse);
    }



}