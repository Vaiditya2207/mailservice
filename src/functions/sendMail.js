import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIN_MAIL_ADDRESS, // Your Gmail address
    pass: process.env.MAIL_KEY // The 16-character app password from step 2
  }
});

const sendMailToListOfUsers = async (messageList) => {
    const mailPromises = messageList.map(i => {
        const mailOptions = {
            from: process.env.NO_REPLY_AUTH_INFORMATION_MAIL_ADDRESS,
            to: i.to,
            subject: i.subject,
            text: i.body, // Plain text body
            html: i.html // HTML body
        };
        return transporter.sendMail(mailOptions);
    });

    try {
        const results = await Promise.all(mailPromises);
        return true
    } catch (error) {
        console.error('Error sending emails:', error);
        return false
    }
};


// Example usage
// sendMailToListOfUsers([
//     {
//         to: 'yashi.g23csai@nst.rishihood.edu.in',
//         subject: 'Welcome to ProjectCreator!',
//         body: 'Thank you for signing up for ProjectCreator!', // Plain text body
//         html: signupTemplate.replace('[User\'s Name]', 'Yashi')
//     }
// ]);

export default sendMailToListOfUsers;