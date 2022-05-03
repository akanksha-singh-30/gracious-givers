// Author: Arjun Naravula Loganathan

const EventsNotification = require("../models/Fundraiser");
const DonationNotification = require("../models/Donation");

const pendingStatus = "Pending Admin Approval";

//Get Notification - Admin
exports.getAdminNotification = async (request, response, next) => {
    const findPendingApproval = {
        status: pendingStatus
    };
    try {
        //Get notification for Admin - Look up events with pending approval
        EventsNotification.find(findPendingApproval)
            .then((notifications) => {
                if (!notifications) {
                    const errorResponse = {
                        message: "No Notification yet",
                        success: false,
                    };
                    return response.status(204).send(errorResponse);
                }

                return response.status(200).send(notifications);
            })
            .catch((error) => {
                console.log("Unable to get notification");
                const errorMessage = {
                    message: "Unable to get notification",
                    errorDescription: error,
                    success: false,
                };
                response.status(500).send(errorMessage);
            });
    } catch (err) {
        //console.log(err);
        const errorMessage = {
            message: err,
            success: false,
        };
        response.status(500).send(errorMessage);
    }
};



//Get Notification - NGO
exports.getNgoNotification = async (request, response, next) => {

    try {
        //Get notification for NGO - Look up events with updated status also get donation details from MongoDB
        let result = await EventsNotification.aggregate([
            {
                $match: {
                    status: { "$in": ["Active", "Deactivated"] }
                }
            },
            {
                $lookup: {
                    from: "donations",
                    localField: "title",
                    foreignField: "donation_event_name",
                    as: "event_donations"
                }
            }

        ]);

        response.status(200).send( result );
        

    } catch (error) {

        const errorMessage = {
            message: "Unable to get notification",
            errorDescription: error,
            success: false,
        };
        response.status(500).send(errorMessage);
    }
}
