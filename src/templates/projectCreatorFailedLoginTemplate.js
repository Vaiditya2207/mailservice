const failedLoginTemplate = (userName, dateTime, location, device) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Suspicious Login Activity</title>
</head>
<body style="background-color: #f9fafb; margin: 0; padding: 0; font-family: Arial, sans-serif;">

  <!-- Header -->
  <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-bottom: 1px solid #e5e7eb;">
    <tr>
      <td align="center" style="padding: 20px;">
        <span style="color: #e53e3e; font-size: 24px; font-weight: bold;">ProjectCreator</span>
      </td>
    </tr>
  </table>

  <!-- Main Content -->
  <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center">
        <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; margin: 40px auto; border-radius: 8px; overflow: hidden; border-top: 4px solid #e53e3e;">
          <tr>
            <td style="padding: 40px 30px; text-align: center;">
              <h1 style="color: #e53e3e; font-size: 28px; margin: 0;">Suspicious Login Activity</h1>
              <p style="color: #333; font-size: 16px; margin: 16px 0;">Hello ${userName},</p>
              <p style="color: #333; font-size: 16px; text-align: left;">We have noticed some unusual activity on your account.</p>
              <div style="text-align: left; margin: 20px 0;">
                <h3 style="color: #e53e3e; font-size: 20px; margin-bottom: 10px;">Login Details</h3>
                <p style="margin: 5px 0;"><strong>Date and Time:</strong> ${dateTime}</p>
                <p style="margin: 5px 0;"><strong>Location:</strong> ${location}</p>
                <p style="margin: 5px 0;"><strong>Device:</strong> ${device}</p>
              </div>
              <p style="color: #333; font-size: 16px; text-align: left;">Here are some quick actions you can take to secure your account:</p>
              <ul style="list-style: none; padding: 0; text-align: left; margin: 20px 0;">
                <li style="margin-bottom: 10px;">
                  <a href="https://projectcreator.onrender.com/reset-your-password" style="color: #e53e3e; text-decoration: none;">Reset your password</a>
                </li>
                <li>
                  <a href="mailto:support@codemelon.xyz" style="color: #1a73e8; text-decoration: none;">Contact Support</a>
                </li>
              </ul>
              <p style="color: #333; font-size: 16px; text-align: left;">If this was you, you can safely ignore this email.</p>
              <p style="color: #1a73e8; font-size: 16px; text-align: left; margin-top: 32px;">Best regards,</p>
              <p style="color: #1a73e8; font-size: 16px; text-align: left;">The ProjectCreator Team</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Footer -->
  <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f3f4f6;">
    <tr>
      <td align="center" style="padding: 20px;">
        <p style="color: #9ca3af; font-size: 12px;">Powered by CodeMelon</p>
      </td>
    </tr>
  </table>

</body>
</html>`;
};

export default failedLoginTemplate;