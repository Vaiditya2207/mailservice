const verificationTemplate = (name, verificationLink) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ProjectCreator - Email Verification</title>
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
              <h1 style="color: #111827; font-size: 28px; margin: 0;">Email Verification Required</h1>
              <p style="color: #6b7280; font-size: 16px; margin: 16px 0 32px;">Please verify your email address</p>
              <p style="color: #111827; font-size: 16px; text-align: left;">Hello ${name},</p>
              <p style="color: #111827; font-size: 16px; text-align: left; margin-top: 16px;">Thank you for registering with ProjectCreator! Please verify your email address to complete your registration.</p>
              <div style="margin: 32px 0;">
                <a href="${verificationLink}" style="background-color: #3b82f6; color: #ffffff; padding: 14px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Verify Email Address</a>
              </div>
              <p style="color: #111827; font-size: 16px; text-align: left;">If the button above doesn't work, please copy and paste the following link into your web browser:</p>
              <p style="word-break: break-all;"><a href="${verificationLink}" style="color: #3b82f6;">${verificationLink}</a></p>
              <p style="color: #111827; font-size: 16px; text-align: left; margin-top: 32px;">If you did not create an account with us, please ignore this email.</p>
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

export default verificationTemplate;