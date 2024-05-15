const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
    const data = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        port: 587, // or 587 if TLS is used
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'tawonga@aumartinvestments.com',
            pass: 'Ausan321#'
        }
    });

    const mailOptions = {
        from: 'tawonga@aumartinvestments.com',
        to: 'tawonhende@gmail.com',
        subject: 'New Contact Form Submission',
        text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully' })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error sending email' })
        };
    }
};
