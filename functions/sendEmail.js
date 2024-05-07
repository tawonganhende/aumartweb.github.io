const nodemailer = require('nodemailer');

exports.handler = async (event) => {
    const { name, email, subject, message } = JSON.parse(event.body);

    // Retrieve email credentials from environment variables
    const transporter = nodemailer.createTransport({
        service: 'Zoho',
        auth: {
            user: process.env.ZOHO_EMAIL,
            pass: process.env.ZOHO_APP_PASSWORD
        }
    });

    // Email content
    const mailOptions = {
        from: name + ' <' + email + '>',
        to: 'austin.nhende@aumartinvestments.com', // Your email address where you want to receive emails
        subject: subject,
        text: message
    };

    // Send email
    try {
        await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Message sent successfully!' })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error sending message.' })
        };
    }
};
