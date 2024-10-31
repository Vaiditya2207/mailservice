const template = `
<div style="width: 600px; margin: 0 auto;">
    <div style="text-align: center; font-family: Arial, sans-serif; color: #333; border: 2px solid red; padding: 20px; border-radius: 10px;">
        <h1 style="color: red;">Suspicious Login Activity</h1>
        <p>Hello [User's Name],</p>
        <p>We have noticed some unusual activity on your account.</p>
        <div style="text-align: left; margin: 20px 0;">
            <h3 style="color: red;">Login Details</h3>
            <p>Date and Time: [Date and Time]</p>
            <p>Location: [Location]</p>
            <p>Device: [Device]</p>
        </div>
        <p>Here are some quick actions you can take to secure your account:</p>
        <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 10px;"><a href="#" style="color: red;">Reset your password</a></li>
            <li><a href="mailto:support@codemelon.xyz" style="color: #4CAF50;">Contact Support</a></li>
        </ul>
        <p>If this was you, you can safely ignore this email.</p>
        <p style="color: #4CAF50;">Best regards,</p>
        <p style="color: #4CAF50;">The ProjectCreator Team</p>
    </div>
</div>
`

export default template;