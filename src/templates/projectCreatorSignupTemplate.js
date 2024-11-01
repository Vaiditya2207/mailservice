const signupTemplate = (userName) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Welcome to ProjectCreator!</title>
</head>
<body style="background-color: #f9fafb; margin: 0; padding: 0; font-family: Arial, sans-serif;">

  <!-- Header -->
  <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-bottom: 1px solid #e5e7eb;">
    <tr>
      <td align="center" style="padding: 20px;">
        <span style="color: #3b82f6; font-size: 24px; font-weight: bold;">ProjectCreator</span>
      </td>
    </tr>
  </table>

  <!-- Main Content -->
  <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center">
        <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; margin: 40px auto; border-radius: 8px; overflow: hidden;">
          <tr>
            <td style="padding: 40px 30px; text-align: center;">
              <h1 style="color: #4CAF50; font-size: 28px; margin: 0;">Welcome to Project Creator!</h1>
              <p style="color: #333; font-size: 16px; margin: 16px 0 32px;">Hello ${userName},</p>
              <p style="color: #333; font-size: 16px; text-align: left;">Thank you for signing up for ProjectCreator! We're excited to have you on board.</p>
              <p style="color: #333; font-size: 16px; text-align: left; margin-top: 16px;">Here are some quick links to get you started:</p>
              <ul style="list-style-type: none; padding: 0; text-align: left; margin-top: 16px;">
                <li style="margin-bottom: 10px;">
                  <a href="https://github.com/Vaiditya2207/ProjectCreator" style="color: #4CAF50;">GitHub Repository</a>
                </li>
                <li>
                  <a href="mailto:support@codemelon.xyz" style="color: #4CAF50;">Support Email</a>
                </li>
              </ul>
              <p style="color: #333; font-size: 16px; text-align: left; margin-top: 16px;">If you have any questions, feel free to reach out to our support team at <a href="mailto:projectcreator.support@codemelon.xyz" style="color: #4CAF50;">here</a>.</p>
              <p style="color: #4CAF50; font-size: 16px; text-align: left; margin-top: 32px;">Best regards,</p>
              <p style="color: #4CAF50; font-size: 16px; text-align: left;">The ProjectCreator Team</p>
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

export default signupTemplate;