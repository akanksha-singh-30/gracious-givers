// Author: Jay Bhagvanbhai Sonani (B00891984)

const nodeMailer = require("nodemailer");
const ADMIN_EMAIL = "graciousgiversweb@gmail.com";
const ADMIN_PASSWORD = "GraciousDon123";
const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
        user: ADMIN_EMAIL,
        pass: ADMIN_PASSWORD,
    },
});




exports.contactUs = async (request, response, next) => {
    try {
        const firstName = request.body.firstName;
        const lastName = request.body.lastName;
        const email = request.body.email;
        const subject = request.body.subject;
        const description = request.body.description;

        await transporter.sendMail({
            from: ADMIN_EMAIL,
            bcc: [ADMIN_EMAIL, email],
            subject: "Gracious Givers - Contact Us",
            html: `<h1>Thank you for contacting us!</h1>
                <p>We will get back to you as soon as possible.</p>
                <p>Below is the copy of your query</p>
                <p>First Name: ${firstName}</p>
                <p>Last Name: ${lastName}</p>
                <p>Email: ${email}</p>
                <p>Subject: ${subject}</p>
                <p>Description: ${description}</p>
                <p>Regards,<br/>Team Gracious Givers</p>`,
        });

        const successResponse = {
            message: "Email sent successfully",
            success: true,
        };
        response.status(200).json(successResponse);
    } catch (err) {
        const errorResponse = {
            message: err,
            success: false,
        };
        response.status(500).json(errorResponse);
    }




    const successResponse = {
        message: 'Email sent to admin successfully.',
        success: true,
    }
    response.status(200).json(successResponse);
}