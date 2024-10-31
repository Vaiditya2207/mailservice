import otpGenrator from '../functions/genrateOtp.js';
import generateOtpTemplate from '../templates/projectCreatorOtpTemplate.js';
import sendMail from '../functions/sendMail.js';

const projectCreatorOtpSender = async (req, res) => {
    if(!req.body[0].digit || !req.body[0].to || !req.body[0].username || !req.body[0].subject || !req.body[0].body) {
        return res.status(400).json({message: "Please provide all details"});
    }
    try {
        const otp = otpGenrator(req.body[0].digit);
        const template = generateOtpTemplate(otp, req.body[0].username);
        const message = [{
            to: req.body[0].to,
            subject: req.body[0].subject,
            body: req.body[0].body,
            html: template
        }]
        const status = await sendMail(message);
        if (status) {
            return res.status(200).json({ message: "Email sent successfully", otp: otp });
        }else {
            return res.status(500).json({ message: "Error sending email" , error: "Internal Server Error"});
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: "Internal Server Error", error: err});
    } 
}

export default projectCreatorOtpSender;