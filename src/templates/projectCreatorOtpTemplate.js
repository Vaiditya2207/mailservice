function generateOtpTemplate(otp, user) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Your OTP Code</title>
</head>
<body style="background-color: #f9fafb; margin: 0; padding: 0; font-family: Arial, sans-serif;">

  <!-- Header -->
  <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-bottom: 1px solid #e5e7eb;">
    <tr>
      <td align="center" style="padding: 20px;">
        <span style="color: #1a73e8; font-size: 24px; font-weight: bold;">ProjectCreator</span>
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
              <h1 style="color: #1a73e8; font-size: 28px; margin: 0;">Your OTP Code</h1>
              <p style="color: #333; font-size: 16px; margin: 16px 0;">Hello ${user},</p>
              <p style="color: #333; font-size: 16px; text-align: left;">We received a request to access your account. Use the following One Time Password (OTP) to complete the process:</p>
              <div style="margin: 24px 0;">
                <a href="#" style="display: inline-block; background-color: #1a73e8; color: #ffffff; padding: 5px 24px; text-decoration: none; border-radius: 4px; font-size: 24px; font-weight: bold;">${otp}</a>
              </div>
              <p style="color: #333; font-size: 16px;">This OTP is valid for 5 minutes. Please do not share this code with anyone.</p>
              <p style="color: #333; font-size: 16px; margin-top: 16px;">If you did not request this, please ignore this email.</p>
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
}

export default generateOtpTemplate;