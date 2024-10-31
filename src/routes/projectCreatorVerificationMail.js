import projectCreatorVerificationMailTemplate from '../templates/projectCretorVerificationMailTemplate.js'
import sendMail from '../functions/sendMail.js'

const projectCreatorVerificationMail = async (req, res) => {
    const { to, verificationLink, username, subject, body } = req.body[0];
    if (!to || !verificationLink || !username || !subject || !body) {
        return res.status(400).json({ message: "Please provide all the required fields" });
    }
    const template = projectCreatorVerificationMailTemplate(username, verificationLink);
    const messageList = [{
        to,
        subject,
        body,
        html: template
    }]
    const status = await sendMail(messageList);
    if (status) {
        return res.status(200).json({ message: "Email sent successfully" });
    } else {
        return res.status(500).json({ message: "Internal Server Error" });
    }

}

export default projectCreatorVerificationMail