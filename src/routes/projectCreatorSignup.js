import template from '../templates/projectCreatorSignupTemplate.js'
import sendMail from '../functions/sendMail.js'

export default async (req, res) => {
    let messageList = req.body;
    for (let i of messageList) {
        i.html = template.replace('[User\'s Name]', i.username);
    }
    
    const status = await sendMail(messageList);
    if (status) {
        return res.status(200).json({ message: 'Email sent successfully' });
    }else {
        return res.status(500).json({ message: 'Error sending email' , error: "Internal Server Error"});
    }
}


//req.body 
//  [{
//    to: "mail",
//    subject: "subject",
//    username: "username",
//    body: "text",
// }]
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
